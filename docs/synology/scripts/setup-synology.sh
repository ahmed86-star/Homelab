#!/bin/bash

# Synology NAS Setup Script
# This script sets up Docker containers and security configurations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SYNOLOGY_IP="192.168.1.10"
SYNOLOGY_DOMAIN="synology.local"
DOCKER_NETWORK="synology-network"
BACKUP_DIR="/volume1/backup"
CONFIG_DIR="/volume1/docker/configs"
DATA_DIR="/volume1/docker/data"

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
check_root() {
    if [[ $EUID -ne 0 ]]; then
        error "This script must be run as root"
    fi
}

# Update system packages
update_system() {
    log "Updating system packages..."
    apt-get update && apt-get upgrade -y
    log "System packages updated successfully"
}

# Install Docker if not present
install_docker() {
    if ! command -v docker &> /dev/null; then
        log "Installing Docker..."
        curl -fsSL https://get.docker.com -o get-docker.sh
        sh get-docker.sh
        usermod -aG docker $USER
        rm get-docker.sh
        log "Docker installed successfully"
    else
        log "Docker is already installed"
    fi
}

# Install Docker Compose if not present
install_docker_compose() {
    if ! command -v docker-compose &> /dev/null; then
        log "Installing Docker Compose..."
        curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        chmod +x /usr/local/bin/docker-compose
        log "Docker Compose installed successfully"
    else
        log "Docker Compose is already installed"
    fi
}

# Create necessary directories
create_directories() {
    log "Creating necessary directories..."
    
    mkdir -p $BACKUP_DIR/{pihole,nextcloud,grafana,influxdb}
    mkdir -p $CONFIG_DIR/{pihole,nextcloud,grafana,influxdb,prometheus,adguard,wireguard}
    mkdir -p $DATA_DIR/{nextcloud,grafana,influxdb,prometheus,minio}
    mkdir -p /volume1/{photos,documents,music,videos,backups}
    
    # Set proper permissions
    chown -R 1000:1000 $DATA_DIR
    chmod -R 755 $CONFIG_DIR
    chmod -R 755 $BACKUP_DIR
    
    log "Directories created successfully"
}

# Setup Docker networks
setup_networks() {
    log "Setting up Docker networks..."
    
    # Create custom network for Synology services
    docker network create --driver bridge --subnet=172.20.0.0/16 $DOCKER_NETWORK 2>/dev/null || true
    
    # Create network for security services
    docker network create --driver bridge --subnet=172.21.0.0/16 synology-security 2>/dev/null || true
    
    # Create network for file management
    docker network create --driver bridge --subnet=172.22.0.0/16 synology-files 2>/dev/null || true
    
    log "Docker networks created successfully"
}

# Generate secure passwords
generate_passwords() {
    log "Generating secure passwords..."
    
    # Generate random passwords
    PIHOLE_PASSWORD=$(openssl rand -base64 32)
    NEXTCLOUD_PASSWORD=$(openssl rand -base64 32)
    GRAFANA_PASSWORD=$(openssl rand -base64 32)
    INFLUXDB_PASSWORD=$(openssl rand -base64 32)
    MINIO_PASSWORD=$(openssl rand -base64 32)
    
    # Save passwords to secure file
    cat > $CONFIG_DIR/passwords.env << EOF
# Generated passwords for Synology services
# Keep this file secure and backup safely

PIHOLE_PASSWORD=$PIHOLE_PASSWORD
NEXTCLOUD_PASSWORD=$NEXTCLOUD_PASSWORD
GRAFANA_PASSWORD=$GRAFANA_PASSWORD
INFLUXDB_PASSWORD=$INFLUXDB_PASSWORD
MINIO_PASSWORD=$MINIO_PASSWORD
EOF
    
    chmod 600 $CONFIG_DIR/passwords.env
    log "Passwords generated and saved to $CONFIG_DIR/passwords.env"
}

# Setup monitoring stack
setup_monitoring() {
    log "Setting up monitoring stack..."
    
    cd $CONFIG_DIR
    
    # Create monitoring docker-compose file
    cat > docker-compose.monitoring.yml << 'EOF'
version: '3.8'

services:
  grafana:
    image: grafana/grafana:latest
    container_name: synology-grafana
    restart: unless-stopped
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=${GRAFANA_PASSWORD}
      - GF_USERS_ALLOW_SIGN_UP=false
    volumes:
      - $DATA_DIR/grafana:/var/lib/grafana
      - ./grafana:/etc/grafana/provisioning
    ports:
      - "3000:3000"
    networks:
      - synology-network

  influxdb:
    image: influxdb:2.7
    container_name: synology-influxdb
    restart: unless-stopped
    environment:
      - DOCKER_INFLUXDB_INIT_MODE=setup
      - DOCKER_INFLUXDB_INIT_USERNAME=admin
      - DOCKER_INFLUXDB_INIT_PASSWORD=${INFLUXDB_PASSWORD}
      - DOCKER_INFLUXDB_INIT_ORG=homelab
      - DOCKER_INFLUXDB_INIT_BUCKET=metrics
    volumes:
      - $DATA_DIR/influxdb:/var/lib/influxdb2
    ports:
      - "8086:8086"
    networks:
      - synology-network

  prometheus:
    image: prom/prometheus:latest
    container_name: synology-prometheus
    restart: unless-stopped
    volumes:
      - ./prometheus:/etc/prometheus
      - $DATA_DIR/prometheus:/prometheus
    ports:
      - "9090:9090"
    networks:
      - synology-network

  node-exporter:
    image: prom/node-exporter:latest
    container_name: synology-node-exporter
    restart: unless-stopped
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    ports:
      - "9100:9100"
    networks:
      - synology-network

networks:
  synology-network:
    external: true
EOF
    
    # Start monitoring services
    docker-compose -f docker-compose.monitoring.yml up -d
    log "Monitoring stack started successfully"
}

# Setup security stack
setup_security() {
    log "Setting up security stack..."
    
    cd $CONFIG_DIR
    
    # Create security docker-compose file
    cat > docker-compose.security.yml << 'EOF'
version: '3.8'

services:
  pihole:
    image: pihole/pihole:latest
    container_name: synology-pihole
    restart: unless-stopped
    environment:
      - TZ=UTC
      - WEBPASSWORD=${PIHOLE_PASSWORD}
      - PIHOLE_DNS_=1.1.1.1;1.0.0.1
      - ServerIP=$SYNOLOGY_IP
    volumes:
      - ./pihole:/etc/pihole
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "80:80"
    networks:
      - synology-security
    cap_add:
      - NET_ADMIN

  adguard-home:
    image: adguard/adguardhome:latest
    container_name: synology-adguard
    restart: unless-stopped
    volumes:
      - ./adguard:/opt/adguardhome/conf
    ports:
      - "3000:3000"
      - "53:53/tcp"
      - "53:53/udp"
    networks:
      - synology-security
    cap_add:
      - NET_ADMIN

  wireguard:
    image: linuxserver/wireguard:latest
    container_name: synology-wireguard
    restart: unless-stopped
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=UTC
      - SERVERURL=auto
      - SERVERPORT=51820
      - PEERS=3
    volumes:
      - ./wireguard:/config
      - /lib/modules:/lib/modules
    ports:
      - "51820:51820/udp"
    networks:
      - synology-security
    cap_add:
      - NET_ADMIN
      - SYS_MODULE

networks:
  synology-security:
    external: true
EOF
    
    # Start security services
    docker-compose -f docker-compose.security.yml up -d
    log "Security stack started successfully"
}

# Setup file management stack
setup_file_management() {
    log "Setting up file management stack..."
    
    cd $CONFIG_DIR
    
    # Create file management docker-compose file
    cat > docker-compose.files.yml << 'EOF'
version: '3.8'

services:
  nextcloud:
    image: nextcloud:latest
    container_name: synology-nextcloud
    restart: unless-stopped
    environment:
      - TZ=UTC
      - MYSQL_HOST=nextcloud-db
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_PASSWORD=${NEXTCLOUD_PASSWORD}
      - NEXTCLOUD_ADMIN_USER=admin
      - NEXTCLOUD_ADMIN_PASSWORD=${NEXTCLOUD_PASSWORD}
    volumes:
      - $DATA_DIR/nextcloud:/var/www/html/data
      - /volume1/nextcloud:/var/www/html/data/user/files
    ports:
      - "8080:80"
    networks:
      - synology-files
    depends_on:
      - nextcloud-db

  nextcloud-db:
    image: mariadb:10.6
    container_name: synology-nextcloud-db
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=${NEXTCLOUD_PASSWORD}
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_PASSWORD=${NEXTCLOUD_PASSWORD}
    volumes:
      - $DATA_DIR/nextcloud-db:/var/lib/mysql
    networks:
      - synology-files

  filebrowser:
    image: filebrowser/filebrowser:latest
    container_name: synology-filebrowser
    restart: unless-stopped
    volumes:
      - ./filebrowser:/config
      - /volume1:/srv
    ports:
      - "8081:80"
    networks:
      - synology-files

  minio:
    image: minio/minio:latest
    container_name: synology-minio
    restart: unless-stopped
    environment:
      - MINIO_ROOT_USER=minioadmin
      - MINIO_ROOT_PASSWORD=${MINIO_PASSWORD}
    volumes:
      - $DATA_DIR/minio:/data
    ports:
      - "9000:9000"
      - "9001:9001"
    command: server /data --console-address ":9001"
    networks:
      - synology-files

networks:
  synology-files:
    external: true
EOF
    
    # Start file management services
    docker-compose -f docker-compose.files.yml up -d
    log "File management stack started successfully"
}

# Setup backup automation
setup_backups() {
    log "Setting up backup automation..."
    
    # Create backup script
    cat > /usr/local/bin/synology-backup.sh << 'EOF'
#!/bin/bash

# Synology backup script
BACKUP_DIR="/volume1/backup"
DATE=$(date +%Y%m%d_%H%M%S)

# Backup Docker volumes
docker run --rm -v synology-grafana:/data -v $BACKUP_DIR/grafana:/backup alpine tar czf /backup/grafana_$DATE.tar.gz -C /data .
docker run --rm -v synology-influxdb:/data -v $BACKUP_DIR/influxdb:/backup alpine tar czf /backup/influxdb_$DATE.tar.gz -C /data .
docker run --rm -v synology-nextcloud:/data -v $BACKUP_DIR/nextcloud:/backup alpine tar czf /backup/nextcloud_$DATE.tar.gz -C /data .

# Backup configurations
tar czf $BACKUP_DIR/configs_$DATE.tar.gz -C /volume1/docker configs/

# Cleanup old backups (keep last 30 days)
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete

echo "Backup completed: $DATE"
EOF
    
    chmod +x /usr/local/bin/synology-backup.sh
    
    # Add to crontab for daily backups at 2 AM
    (crontab -l 2>/dev/null; echo "0 2 * * * /usr/local/bin/synology-backup.sh") | crontab -
    
    log "Backup automation configured successfully"
}

# Setup monitoring and alerts
setup_monitoring_alerts() {
    log "Setting up monitoring and alerts..."
    
    # Create system monitoring script
    cat > /usr/local/bin/synology-monitor.sh << 'EOF'
#!/bin/bash

# Synology system monitoring script
SYNOLOGY_IP="192.168.1.10"
ALERT_EMAIL="admin@synology.local"

# Check disk space
DISK_USAGE=$(df /volume1 | awk 'NR==2 {print $5}' | sed 's/%//')
if [ $DISK_USAGE -gt 80 ]; then
    echo "WARNING: Disk usage is ${DISK_USAGE}%" | mail -s "Synology Disk Alert" $ALERT_EMAIL
fi

# Check Docker containers
if ! docker ps --format "table {{.Names}}\t{{.Status}}" | grep -q "Up"; then
    echo "WARNING: Some Docker containers are not running" | mail -s "Synology Docker Alert" $ALERT_EMAIL
fi

# Check network connectivity
if ! ping -c 1 8.8.8.8 &> /dev/null; then
    echo "WARNING: Network connectivity issues detected" | mail -s "Synology Network Alert" $ALERT_EMAIL
fi

echo "System monitoring check completed: $(date)"
EOF
    
    chmod +x /usr/local/bin/synology-monitor.sh
    
    # Add to crontab for hourly monitoring
    (crontab -l 2>/dev/null; echo "0 * * * * /usr/local/bin/synology-monitor.sh") | crontab -
    
    log "Monitoring and alerts configured successfully"
}

# Main setup function
main() {
    log "Starting Synology NAS setup..."
    
    check_root
    update_system
    install_docker
    install_docker_compose
    create_directories
    setup_networks
    generate_passwords
    setup_monitoring
    setup_security
    setup_file_management
    setup_backups
    setup_monitoring_alerts
    
    log "Synology NAS setup completed successfully!"
    log "Access your services at:"
    log "  - Grafana: http://$SYNOLOGY_IP:3000"
    log "  - Pi-hole: http://$SYNOLOGY_IP"
    log "  - Nextcloud: http://$SYNOLOGY_IP:8080"
    log "  - Filebrowser: http://$SYNOLOGY_IP:8081"
    log "  - MinIO Console: http://$SYNOLOGY_IP:9001"
    log ""
    log "Passwords are saved in: $CONFIG_DIR/passwords.env"
    log "Remember to change default passwords!"
}

# Run main function
main "$@" 