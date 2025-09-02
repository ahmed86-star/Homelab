#!/bin/bash

# 🐳 Docker Compose Setup Script for Homelab
# This script sets up the docker-compose environment with security best practices

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
    exit 1
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   error "This script should not be run as root. Please run as a regular user with sudo privileges."
fi

log "🚀 Starting Docker Compose Setup for Homelab..."

# Check prerequisites
log "📋 Checking prerequisites..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    error "Docker is not installed. Please install Docker first."
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    error "Docker Compose is not installed. Please install Docker Compose first."
fi

# Check if Docker daemon is running
if ! docker info &> /dev/null; then
    error "Docker daemon is not running. Please start Docker first."
fi

log "✅ Prerequisites check passed"

# Create necessary directories
log "📁 Creating directory structure..."
mkdir -p /opt/homelab/{pve1,pve2}
mkdir -p /opt/homelab/pve1/{byte-stash,casaos,cloudflared,homarr,openwebui,pihole,trillium}/{data,config,logs}
mkdir -p /opt/homelab/pve2/{adguard,cloudflared,grafana,influxdb,jenkins,minio,netbox,tianji}/{data,config,logs}

# Set proper permissions
log "🔐 Setting proper permissions..."
sudo chown -R $USER:$USER /opt/homelab
chmod -R 755 /opt/homelab

# Create Docker network
log "🌐 Creating Docker network..."
if ! docker network ls | grep -q homelab; then
    docker network create \
        --driver bridge \
        --subnet=172.20.0.0/16 \
        --gateway=172.20.0.1 \
        --opt "com.docker.network.bridge.name"="homelab" \
        homelab
    log "✅ Created homelab network"
else
    log "✅ homelab network already exists"
fi

# Generate secure passwords
log "🔑 Generating secure passwords..."
ENV_FILE="/opt/homelab/.env"

# Generate random passwords
PIHOLE_PASSWORD=$(openssl rand -base64 32)
GRAFANA_PASSWORD=$(openssl rand -base64 32)
INFLUXDB_PASSWORD=$(openssl rand -base64 32)
INFLUXDB_TOKEN=$(openssl rand -base64 32)
MINIO_ROOT_PASSWORD=$(openssl rand -base64 32)
NETBOX_DB_PASSWORD=$(openssl rand -base64 32)
NETBOX_SECRET_KEY=$(openssl rand -hex 32)
NETBOX_REDIS_PASSWORD=$(openssl rand -base64 32)
BACKUP_ENCRYPTION_KEY=$(openssl rand -base64 32)

# Create environment file
log "📝 Creating environment file..."
cat > "$ENV_FILE" << EOF
# Docker Compose Environment Configuration
# Generated on $(date)

# =============================================================================
# CLOUDFLARED CONFIGURATION
# =============================================================================
TUNNEL_TOKEN=your_cloudflare_tunnel_token_here

# =============================================================================
# PI-HOLE CONFIGURATION
# =============================================================================
PIHOLE_PASSWORD=$PIHOLE_PASSWORD

# =============================================================================
# GRAFANA CONFIGURATION
# =============================================================================
GRAFANA_PASSWORD=$GRAFANA_PASSWORD

# =============================================================================
# INFLUXDB CONFIGURATION
# =============================================================================
INFLUXDB_USERNAME=admin
INFLUXDB_PASSWORD=$INFLUXDB_PASSWORD
INFLUXDB_ORG=homelab
INFLUXDB_BUCKET=metrics
INFLUXDB_TOKEN=$INFLUXDB_TOKEN

# =============================================================================
# MINIO CONFIGURATION
# =============================================================================
MINIO_ROOT_USER=minioadmin
MINIO_ROOT_PASSWORD=$MINIO_ROOT_PASSWORD

# =============================================================================
# NETBOX CONFIGURATION
# =============================================================================
NETBOX_DB_PASSWORD=$NETBOX_DB_PASSWORD
NETBOX_SECRET_KEY=$NETBOX_SECRET_KEY
NETBOX_REDIS_PASSWORD=$NETBOX_REDIS_PASSWORD

# =============================================================================
# SECURITY SETTINGS
# =============================================================================
PUID=1000
PGID=1000

# =============================================================================
# NETWORK SETTINGS
# =============================================================================
DOCKER_NETWORK_SUBNET=172.20.0.0/16
DOCKER_NETWORK_GATEWAY=172.20.0.1

# =============================================================================
# LOGGING SETTINGS
# =============================================================================
LOG_MAX_SIZE=10m
LOG_MAX_FILES=3

# =============================================================================
# RESOURCE LIMITS
# =============================================================================
DEFAULT_CPU_LIMIT=1.0
DEFAULT_MEMORY_LIMIT=1G

# =============================================================================
# HEALTH CHECK SETTINGS
# =============================================================================
HEALTH_CHECK_INTERVAL=30s
HEALTH_CHECK_TIMEOUT=10s
HEALTH_CHECK_RETRIES=3
HEALTH_CHECK_START_PERIOD=40s

# =============================================================================
# BACKUP SETTINGS
# =============================================================================
BACKUP_ENCRYPTION_KEY=$BACKUP_ENCRYPTION_KEY
BACKUP_RETENTION_DAYS=7

# =============================================================================
# MONITORING SETTINGS
# =============================================================================
PROMETHEUS_PORT=9090
GRAFANA_PORT=3000
INFLUXDB_PORT=8086

# =============================================================================
# TIMEZONE SETTINGS
# =============================================================================
TZ=UTC

# =============================================================================
# DOMAIN SETTINGS
# =============================================================================
BASE_DOMAIN=local
TRAEFIK_ENABLED=true
EOF

# Set proper permissions for environment file
chmod 600 "$ENV_FILE"
log "✅ Created environment file at $ENV_FILE"

# Copy docker-compose files
log "📋 Copying docker-compose files..."
cp -r pve1/* /opt/homelab/pve1/
cp -r pve2/* /opt/homelab/pve2/

# Create service-specific environment files
log "🔧 Creating service-specific environment files..."

# PVE1 services
for service in byte-stash casaos cloudflared homarr openwebui pihole trillium; do
    ln -sf "$ENV_FILE" "/opt/homelab/pve1/$service/.env"
done

# PVE2 services
for service in adguard cloudflared grafana influxdb jenkins minio netbox tianji; do
    ln -sf "$ENV_FILE" "/opt/homelab/pve2/$service/.env"
done

# Create maintenance scripts
log "🔧 Creating maintenance scripts..."

# Update script
cat > /opt/homelab/update-services.sh << 'EOF'
#!/bin/bash

# Update all docker-compose services
set -euo pipefail

LOG_FILE="/var/log/homelab/updates.log"
ERROR_LOG="/var/log/homelab/errors.log"

# Create log directory
sudo mkdir -p /var/log/homelab

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | sudo tee -a "$LOG_FILE"
}

# Function to log errors
log_error() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - ERROR: $1" | sudo tee -a "$ERROR_LOG"
}

cd /opt/homelab

# Update PVE1 services
log_message "Updating PVE1 services..."
for service in pve1/*/; do
    if [ -d "$service" ]; then
        service_name=$(basename "$service")
        log_message "Updating $service_name..."
        
        cd "$service"
        
        # Pull new images
        if ! docker-compose pull; then
            log_error "Failed to pull images for $service_name"
            cd /opt/homelab
            continue
        fi
        
        # Update containers
        if ! docker-compose up -d; then
            log_error "Failed to update containers for $service_name"
            cd /opt/homelab
            continue
        fi
        
        # Verify service health
        if ! docker-compose ps | grep -q "healthy"; then
            log_error "Service $service_name is not healthy after update"
        fi
        
        log_message "Successfully updated $service_name"
        cd /opt/homelab
    fi
done

# Update PVE2 services
log_message "Updating PVE2 services..."
for service in pve2/*/; do
    if [ -d "$service" ]; then
        service_name=$(basename "$service")
        log_message "Updating $service_name..."
        
        cd "$service"
        
        # Pull new images
        if ! docker-compose pull; then
            log_error "Failed to pull images for $service_name"
            cd /opt/homelab
            continue
        fi
        
        # Update containers
        if ! docker-compose up -d; then
            log_error "Failed to update containers for $service_name"
            cd /opt/homelab
            continue
        fi
        
        # Verify service health
        if ! docker-compose ps | grep -q "healthy"; then
            log_error "Service $service_name is not healthy after update"
        fi
        
        log_message "Successfully updated $service_name"
        cd /opt/homelab
    fi
done

log_message "Update process completed"
EOF

# Backup script
cat > /opt/homelab/backup-services.sh << 'EOF'
#!/bin/bash

# Backup all docker-compose services
set -euo pipefail

BACKUP_DIR="/backup/homelab"
DATE=$(date +%Y%m%d)
ENCRYPTION_KEY=$(grep BACKUP_ENCRYPTION_KEY /opt/homelab/.env | cut -d'=' -f2)
LOG_FILE="/var/log/homelab/backup.log"

# Create backup directory
sudo mkdir -p "$BACKUP_DIR/$DATE"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | sudo tee -a "$LOG_FILE"
}

cd /opt/homelab

# Backup all services
for service in pve1/*/ pve2/*/; do
    if [ -d "$service" ]; then
        service_name=$(basename "$service")
        log_message "Backing up $service_name..."
        
        # Create backup with compression and encryption
        tar -czf - "$service" | \
        openssl enc -aes-256-cbc -salt -k "$ENCRYPTION_KEY" > \
        "$BACKUP_DIR/$DATE/$service_name.tar.gz.enc"
        
        # Verify backup
        if [ $? -eq 0 ]; then
            log_message "Successfully backed up $service_name"
        else
            log_message "Failed to backup $service_name"
        fi
    fi
done

# Cleanup old backups (keep last 7 days)
find "$BACKUP_DIR" -type d -mtime +7 -exec sudo rm -rf {} \;

log_message "Backup process completed"
EOF

# Health check script
cat > /opt/homelab/health-check.sh << 'EOF'
#!/bin/bash

# Health check for all docker-compose services
set -euo pipefail

LOG_FILE="/var/log/homelab/health.log"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | sudo tee -a "$LOG_FILE"
}

cd /opt/homelab

# Check all services
for service in pve1/*/ pve2/*/; do
    if [ -d "$service" ]; then
        service_name=$(basename "$service")
        
        cd "$service"
        
        # Check if service is running
        if docker-compose ps | grep -q "Up"; then
            log_message "$service_name is running"
        else
            log_message "WARNING: $service_name is not running"
        fi
        
        # Check health status
        if docker-compose ps | grep -q "healthy"; then
            log_message "$service_name is healthy"
        else
            log_message "WARNING: $service_name is not healthy"
        fi
        
        cd /opt/homelab
    fi
done

log_message "Health check completed"
EOF

# Make scripts executable
chmod +x /opt/homelab/*.sh

# Create systemd service for automatic updates
log "🔧 Creating systemd service for automatic updates..."
sudo tee /etc/systemd/system/homelab-update.service > /dev/null << EOF
[Unit]
Description=Homelab Docker Compose Update Service
After=docker.service
Requires=docker.service

[Service]
Type=oneshot
ExecStart=/opt/homelab/update-services.sh
User=$USER
Group=$USER

[Install]
WantedBy=multi-user.target
EOF

sudo tee /etc/systemd/system/homelab-update.timer > /dev/null << EOF
[Unit]
Description=Run Homelab Update Service weekly
Requires=homelab-update.service

[Timer]
OnCalendar=weekly
Persistent=true

[Install]
WantedBy=timers.target
EOF

# Enable and start the timer
sudo systemctl daemon-reload
sudo systemctl enable homelab-update.timer
sudo systemctl start homelab-update.timer

log "✅ Created systemd service for automatic updates"

# Create logrotate configuration
log "📝 Creating logrotate configuration..."
sudo tee /etc/logrotate.d/homelab > /dev/null << EOF
/var/log/homelab/*.log {
    daily
    missingok
    rotate 7
    compress
    delaycompress
    notifempty
    create 644 $USER $USER
}
EOF

log "✅ Created logrotate configuration"

# Final instructions
log "🎉 Setup completed successfully!"
echo
echo -e "${BLUE}Next steps:${NC}"
echo "1. Update the Cloudflare tunnel token in $ENV_FILE"
echo "2. Review and customize the environment variables"
echo "3. Start services:"
echo "   cd /opt/homelab/pve1/[service] && docker-compose up -d"
echo "   cd /opt/homelab/pve2/[service] && docker-compose up -d"
echo
echo -e "${BLUE}Useful commands:${NC}"
echo "• Update all services: /opt/homelab/update-services.sh"
echo "• Backup all services: /opt/homelab/backup-services.sh"
echo "• Health check: /opt/homelab/health-check.sh"
echo "• View logs: docker-compose logs -f"
echo
echo -e "${BLUE}Security notes:${NC}"
echo "• All passwords have been generated automatically"
echo "• Environment file is protected with 600 permissions"
echo "• Services run as non-root user (1000:1000)"
echo "• Health checks are enabled for all services"
echo "• Resource limits are configured"
echo
echo -e "${YELLOW}⚠️  IMPORTANT: Update the TUNNEL_TOKEN in $ENV_FILE before starting Cloudflared services${NC}" 