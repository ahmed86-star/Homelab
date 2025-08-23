# 🐳 Docker Compose Documentation

This directory contains comprehensive documentation for the enterprise-grade container orchestration setup, designed for scalability, reliability, and maintainability.

## 📚 Contents

- `docker-compose.yml` - Production-grade service definitions
- `docker-compose.override.yml` - Environment-specific configurations
- `docker-compose.prod.yml` - Production environment settings
- `docker-compose.dev.yml` - Development environment settings

## 🎯 Overview

The Docker Compose documentation covers production-grade implementations of:

- 🚀 **Service Architecture**
  - Microservices design
  - Service dependencies
  - Resource allocation
  - Network configuration
  - Volume management

- 🔒 **Security Configuration**
  - Container isolation
  - Network security
  - Secret management
  - Access control
  - Security policies

- 📊 **Resource Management**
  - CPU allocation
  - Memory limits
  - Storage optimization
  - Network bandwidth
  - Resource quotas

- 🔄 **Deployment Strategy**
  - Zero-downtime updates
  - Rolling deployments
  - Health checks
  - Auto-scaling
  - Load balancing

## 🛠️ Environment Configuration

- Development setup
- Staging environment
- Production deployment
- Testing configuration
- CI/CD integration

## 📈 Monitoring

- Container metrics
- Resource utilization
- Performance tracking
- Health monitoring
- Log aggregation

## 🔧 Maintenance

- Regular updates
- Backup procedures
- Disaster recovery
- Performance tuning
- Capacity planning

# Homelab Docker Compose Files

This directory contains Docker Compose files for services running on two Proxmox nodes (PVE1 and PVE2) in my personal homelab setup. These configurations have been tested and optimized for my specific use case.

## 👨‍💻 About Me

- **Role**: Cloud Engineer / DevOps
- **GitHub**: [@ahmed86-star](https://github.com/ahmed86-star)
- **GitLab**: [@ahmed86-star](https://gitlab.com/ahmed86-star)

### Current Focus
- 🎯 Compiling projects/lab writeups
- 📚 Obtaining Sec+ & CySA+ certifications
- 🚀 Working towards AWS Certified Cloud Practitioner & Azure Fundamentals
- 🧠 Learning Python scripting & Cloud Detection/Response for Azure
- 👥 Interested in Cloud Security Projects, Threat Detection, Home Labs & more

### Tech Stack (In Progress)
- 🌱 Kubernetes
- 🌱 Terraform
- 🌱 Advanced AWS services

## 🏗️ Infrastructure Overview

### PVE1 (Primary Node)
- Primary services and user-facing applications
- File sharing and storage solutions
- DNS and network management
- Dashboard and monitoring tools

### PVE2 (Secondary Node)
- Monitoring and metrics collection
- CI/CD infrastructure
- Network documentation
- Object storage
- Additional DNS services

## 📁 Directory Structure

```
docker-compose/
├── pve1/                    # Primary Proxmox node services
│   ├── byte-stash.yml      # File sharing service
│   ├── casaos.yml          # Home server OS
│   ├── cloudflared.yml     # Cloudflare tunnel
│   ├── homarr.yml          # Service dashboard
│   ├── openwebui.yml       # Ollama web interface
│   ├── pihole.yml          # DNS sinkhole
│   ├── swizzin.yml         # Seedbox solution for torrenting and media management
│   └── trillium.yml        # Note-taking app
└── pve2/                    # Secondary Proxmox node services
    ├── adguard.yml         # DNS ad-blocker
    ├── cloudflared.yml     # Cloudflare tunnel
    ├── grafana.yml         # Metrics visualization
    ├── influxdb.yml        # Time series database
    ├── jenkins.yml         # CI/CD server
    ├── minio.yml           # Object storage
    ├── netbox.yml          # Network documentation
    └── tianji.yml          # Monitoring service
```

## 🚀 Getting Started

### Prerequisites

1. **Docker and Docker Compose**
   ```bash
   # Install Docker
   curl -fsSL https://get.docker.com | sh
   
   # Install Docker Compose
   apt-get update && apt-get install -y docker-compose-plugin
   
   # Verify installations
   docker --version
   docker compose version
   
   # Configure Docker daemon for production
   cat > /etc/docker/daemon.json << EOF
   {
     "log-driver": "json-file",
     "log-opts": {
       "max-size": "100m",
       "max-file": "3"
     },
     "storage-driver": "overlay2",
     "storage-opts": [
       "overlay2.size=10G"
     ],
     "default-ulimits": {
       "nofile": {
         "Name": "nofile",
         "Hard": 64000,
         "Soft": 64000
       }
     }
   }
   EOF
   ```

2. **Docker Network**
   ```bash
   # Create the homelab network with specific subnet and gateway
   docker network create \
     --driver bridge \
     --subnet=172.20.0.0/16 \
     --gateway=172.20.0.1 \
     --opt "com.docker.network.bridge.name"="homelab" \
     homelab
   
   # Verify network configuration
   docker network inspect homelab
   ```

3. **Directory Structure**
   ```bash
   # Create necessary directories with proper permissions
   mkdir -p /opt/homelab/{pve1,pve2}
   chown -R 1000:1000 /opt/homelab
   chmod -R 755 /opt/homelab
   
   # Create service-specific directories
   for service in pve1 pve2; do
     mkdir -p /opt/homelab/$service/{data,config,logs}
     chown -R 1000:1000 /opt/homelab/$service
     chmod -R 755 /opt/homelab/$service
   done
   ```

### Environment Setup

Create a `.env` file in each service directory with secure defaults:

```bash
#!/bin/bash

# PVE1 Services
cat > pve1/cloudflared/.env << EOF
TUNNEL_TOKEN=your_cloudflare_tunnel_token
TUNNEL_METRICS=0.0.0.0:2000
TUNNEL_PROTOCOL=http2
TUNNEL_ORIGIN_REQUEST_TIMEOUT=30s
EOF

cat > pve1/pihole/.env << EOF
PIHOLE_PASSWORD=your_pihole_web_password
PIHOLE_DNS_1=1.1.1.1
PIHOLE_DNS_2=1.0.0.1
PIHOLE_DNS_3=8.8.8.8
PIHOLE_DNS_4=8.8.4.4
WEBPASSWORD=your_web_password
TZ=UTC
EOF

cat > pve1/swizzin/.env << EOF
SWIZZIN_PASSWORD=your_swizzin_web_password
TZ=UTC
PUID=1000
PGID=1000
WEBPASSWORD=your_swizzin_admin_password
VIRTUAL_HOST=swizzin.local
EOF

# PVE2 Services
cat > pve2/grafana/.env << EOF
GRAFANA_PASSWORD=your_grafana_admin_password
GF_SECURITY_ADMIN_USER=admin
GF_SECURITY_ADMIN_PASSWORD=your_grafana_admin_password
GF_INSTALL_PLUGINS=grafana-clock-panel,grafana-simple-json-datasource
GF_PATHS_DATA=/var/lib/grafana
GF_PATHS_LOGS=/var/log/grafana
GF_PATHS_PLUGINS=/var/lib/grafana/plugins
GF_PATHS_PROVISIONING=/etc/grafana/provisioning
EOF

cat > pve2/influxdb/.env << EOF
INFLUXDB_USERNAME=your_influxdb_username
INFLUXDB_PASSWORD=your_influxdb_password
INFLUXDB_ORG=your_organization_name
INFLUXDB_BUCKET=your_bucket_name
INFLUXDB_TOKEN=your_influxdb_token
INFLUXDB_DB=homelab
INFLUXDB_HTTP_AUTH_ENABLED=true
INFLUXDB_HTTP_LOG_ENABLED=true
INFLUXDB_HTTP_WRITE_TIMEOUT=10s
INFLUXDB_HTTP_READ_TIMEOUT=30s
EOF

cat > pve2/minio/.env << EOF
MINIO_ROOT_USER=your_minio_root_user
MINIO_ROOT_PASSWORD=your_minio_root_password
MINIO_BROWSER_REDIRECT_URL=https://minio.yourdomain.com
MINIO_SERVER_URL=https://minio.yourdomain.com
MINIO_PROMETHEUS_AUTH_TYPE=public
MINIO_CACHE_DRIVES="/data"
MINIO_CACHE_EXCLUDE="bucket1/*,*.tmp"
MINIO_CACHE_QUOTA=80
MINIO_CACHE_AFTER=0
MINIO_CACHE_WATERMARK_LOW=70
MINIO_CACHE_WATERMARK_HIGH=80
EOF

cat > pve2/netbox/.env << EOF
NETBOX_DB_PASSWORD=your_netbox_db_password
NETBOX_SECRET_KEY=your_netbox_secret_key
NETBOX_DB_NAME=netbox
NETBOX_DB_USER=netbox
NETBOX_DB_HOST=postgres
NETBOX_DB_PORT=5432
NETBOX_REDIS_HOST=redis
NETBOX_REDIS_PORT=6379
NETBOX_REDIS_PASSWORD=your_redis_password
NETBOX_REDIS_DB=0
NETBOX_REDIS_SSL=false
NETBOX_REDIS_VERIFY_SSL=false
EOF
```

## 🛠️ Service Details

### PVE1 Services

#### Byte Stash
```yaml
version: '3.8'
services:
  byte-stash:
    image: byte-stash:latest
    container_name: byte-stash
    restart: unless-stopped
    ports:
      - "8080:8080"
    volumes:
      - ./data:/data
      - ./config:/config
    environment:
      - TZ=UTC
      - PUID=1000
      - PGID=1000
    networks:
      - homelab
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 1G
        reservations:
          cpus: '0.25'
          memory: 512M
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

#### CasaOS
```yaml
version: '3.8'
services:
  casaos:
    image: casaos:latest
    container_name: casaos
    restart: unless-stopped
    ports:
      - "80:80"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/casaos:/var/lib/casaos
    environment:
      - TZ=UTC
      - PUID=1000
      - PGID=1000
    networks:
      - homelab
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '0.5'
          memory: 1G
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:80/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

#### Cloudflared
- **Purpose**: Secure tunnel to Cloudflare
- **Requirements**: Cloudflare tunnel token
- **Use Case**: Secure remote access

#### Homarr
- **Purpose**: Service dashboard
- **Port**: 7575
- **Volumes**: 
  - `./data:/app/data/configs`
  - `./icons:/app/public/icons`
- **Use Case**: Service monitoring and quick access

#### OpenWebUI
- **Purpose**: Ollama web interface
- **Port**: 3000
- **Requirements**: Ollama instance
- **Use Case**: AI model management

#### Pi-hole
- **Purpose**: DNS sinkhole
- **Ports**: 
  - 53 (TCP/UDP)
  - 80
- **Volumes**: 
  - `./etc-pihole`
  - `./etc-dnsmasq.d`
- **Use Case**: Network-wide ad blocking

#### Swizzin
- **Purpose**: Seedbox solution for torrenting and media management
- **Ports**: 
  - 8080 (Web dashboard)
  - 8989 (Sonarr)
  - 7878 (Radarr)
  - 9117 (Jackett)
  - 32400 (Plex)
  - 5000 (rTorrent/ruTorrent)
- **Volumes**: 
  - `./config`
  - `./data`
  - `./downloads`
  - `./media`
- **Description**: Light-weight, modular, and user-friendly seedbox solution for Debian-based servers. Allows easy installation and management of applications like rTorrent, Sonarr, Radarr, and Plex, all accessible through command-line utility or web-based dashboard.
- **Use Case**: Automated media acquisition and management

#### Trillium
- **Purpose**: Note-taking
- **Port**: 8080
- **Data**: `./data`
- **Use Case**: Personal knowledge management

### PVE2 Services

#### AdGuard Home
- **Purpose**: DNS ad-blocker
- **Ports**: Multiple (53, 67, 68, 80, 443, etc.)
- **Volumes**: 
  - `./work`
  - `./conf`
- **Use Case**: Secondary DNS and ad-blocking

#### Grafana
- **Purpose**: Metrics visualization
- **Port**: 3000
- **Data**: `./data`
- **Use Case**: System monitoring

#### InfluxDB
- **Purpose**: Time series database
- **Port**: 8086
- **Data**: `./data`
- **Use Case**: Metrics storage

#### Jenkins
- **Purpose**: CI/CD server
- **Ports**: 
  - 8080
  - 50000
- **Volumes**: 
  - `./data`
  - Docker socket
- **Use Case**: Automation and deployment

#### MinIO
- **Purpose**: Object storage
- **Ports**: 
  - 9000 (API)
  - 9001 (Console)
- **Data**: `./data`
- **Use Case**: S3-compatible storage

#### NetBox
- **Purpose**: Network documentation
- **Port**: 8000
- **Components**: 
  - PostgreSQL
  - Redis
- **Use Case**: Network infrastructure management

#### Tianji
- **Purpose**: Monitoring
- **Port**: 8080
- **Data**: `./data`
- **Use Case**: System monitoring

## 🔧 Maintenance

### Update Procedure
```bash
#!/bin/bash
# Update script with logging and error handling
LOG_FILE="/var/log/homelab/updates.log"
ERROR_LOG="/var/log/homelab/errors.log"

# Create log directory
mkdir -p /var/log/homelab

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

# Function to log errors
log_error() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - ERROR: $1" >> "$ERROR_LOG"
}

# Update all services
for dir in */; do
    cd "$dir" || continue
    service_name=$(basename "$dir")
    
    log_message "Updating $service_name..."
    
    # Pull new images
    if ! docker compose pull; then
        log_error "Failed to pull images for $service_name"
        continue
    fi
    
    # Update containers
    if ! docker compose up -d; then
        log_error "Failed to update containers for $service_name"
        continue
    fi
    
    # Verify service health
    if ! docker compose ps | grep -q "healthy"; then
        log_error "Service $service_name is not healthy after update"
    fi
    
    log_message "Successfully updated $service_name"
    cd ..
done
```

### Backup Strategy
```bash
#!/bin/bash
# Enhanced backup script with encryption and compression
BACKUP_DIR="/backup/homelab"
DATE=$(date +%Y%m%d)
ENCRYPTION_KEY="your_encryption_key"
LOG_FILE="/var/log/homelab/backup.log"

# Create backup directory
mkdir -p "$BACKUP_DIR/$DATE"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

# Backup Docker volumes with encryption
for service in */; do
    service_name=$(basename "$service")
    log_message "Backing up $service_name..."
    
    # Create backup with compression
    tar -czf - "$service" | \
    openssl enc -aes-256-cbc -salt -k "$ENCRYPTION_KEY" > \
    "$BACKUP_DIR/$DATE/$service_name.tar.gz.enc"
    
    # Verify backup
    if [ $? -eq 0 ]; then
        log_message "Successfully backed up $service_name"
    else
        log_message "Failed to backup $service_name"
    fi
done

# Cleanup old backups (keep last 7 days)
find "$BACKUP_DIR" -type d -mtime +7 -exec rm -rf {} \;

# Sync to remote storage
rsync -avz --delete "$BACKUP_DIR" user@remote-server:/backup/homelab/
```

### Monitoring
- Grafana dashboards for system metrics
- Tianji for service health
- Homarr for quick status overview

## 🔒 Security

### Best Practices
1. **Password Management**
   ```bash
   # Generate secure passwords
   openssl rand -base64 32
   
   # Rotate passwords monthly
   for service in */; do
     cd "$service"
     # Update password in .env file
     sed -i "s/OLD_PASSWORD=.*/NEW_PASSWORD=$(openssl rand -base64 32)/" .env
     # Restart service to apply new password
     docker compose down && docker compose up -d
     cd ..
   done
   ```

2. **Network Security**
   ```bash
   # Configure UFW firewall
   ufw default deny incoming
   ufw default allow outgoing
   ufw allow 22/tcp
   ufw allow 80/tcp
   ufw allow 443/tcp
   ufw enable
   
   # Configure fail2ban
   apt-get install fail2ban
   cat > /etc/fail2ban/jail.local << EOF
   [sshd]
   enabled = true
   port = ssh
   filter = sshd
   logpath = /var/log/auth.log
   maxretry = 3
   bantime = 3600
   EOF
   ```

3. **Container Security**
   ```bash
   # Regular security updates
   for service in */; do
     cd "$service"
     # Update base images
     docker compose build --no-cache
     # Scan for vulnerabilities
     trivy image $(docker compose config | grep image | awk '{print $2}')
     cd ..
   done
   
   # Resource limits
   cat > /etc/docker/daemon.json << EOF
   {
     "default-ulimits": {
       "nofile": {
         "Name": "nofile",
         "Hard": 64000,
         "Soft": 64000
       }
     },
     "default-address-pools": [
       {
         "base": "172.20.0.0/16",
         "size": 24
       }
     ]
   }
   EOF
   ```

4. **Backup Security**
   ```bash
   # Encrypt backup files
   for backup in /backup/homelab/*; do
     openssl enc -aes-256-cbc -salt -in "$backup" -out "$backup.enc" -k "$ENCRYPTION_KEY"
     rm "$backup"
   done
   
   # Verify backup integrity
   for backup in /backup/homelab/*.enc; do
     openssl enc -aes-256-cbc -d -in "$backup" -out "${backup%.enc}" -k "$ENCRYPTION_KEY"
     if [ $? -eq 0 ]; then
       echo "Backup $backup is valid"
       rm "${backup%.enc}"
     else
       echo "Backup $backup is corrupted"
     fi
   done
   ```

## 🚨 Troubleshooting

### Common Issues

1. **Container Won't Start**
   ```bash
   # Check logs
   docker compose logs
   
   # Verify network
   docker network inspect homelab
   
   # Check permissions
   ls -la ./data
   ```

2. **Network Issues**
   ```bash
   # Test connectivity
   docker compose exec service ping other-service
   
   # Check DNS
   docker compose exec service nslookup other-service
   ```

3. **Volume Issues**
   ```bash
   # Check volume mounts
   docker compose exec service ls -la /data
   
   # Verify permissions
   docker compose exec service id
   ```

## 📝 Notes

- All services use the `homelab` network for internal communication
- Timezone is set to UTC for consistency
- Regular maintenance is performed on the first Sunday of each month
- Backup verification is done monthly
- Security updates are applied as soon as available

## 🔄 Updates

- Last updated: [Current Date]
- Next maintenance: [Next Sunday]
- Recent changes:
  - Added new services
  - Updated security configurations
  - Improved backup procedures 