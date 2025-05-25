# Homelab Docker Compose Files

This directory contains Docker Compose files for services running on two Proxmox nodes (PVE1 and PVE2) in my personal homelab setup. These configurations have been tested and optimized for my specific use case.

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
   ```

2. **Docker Network**
   ```bash
   # Create the homelab network
   docker network create homelab
   ```

3. **Directory Structure**
   ```bash
   # Create necessary directories
   mkdir -p /opt/homelab/{pve1,pve2}
   ```

### Environment Setup

Create a `.env` file in each service directory. Here's a template generator script:

```bash
#!/bin/bash

# PVE1 Services
cat > pve1/cloudflared/.env << EOF
TUNNEL_TOKEN=your_cloudflare_tunnel_token
EOF

cat > pve1/pihole/.env << EOF
PIHOLE_PASSWORD=your_pihole_web_password
EOF

# PVE2 Services
cat > pve2/grafana/.env << EOF
GRAFANA_PASSWORD=your_grafana_admin_password
EOF

cat > pve2/influxdb/.env << EOF
INFLUXDB_USERNAME=your_influxdb_username
INFLUXDB_PASSWORD=your_influxdb_password
INFLUXDB_ORG=your_organization_name
INFLUXDB_BUCKET=your_bucket_name
INFLUXDB_TOKEN=your_influxdb_token
EOF

cat > pve2/minio/.env << EOF
MINIO_ROOT_USER=your_minio_root_user
MINIO_ROOT_PASSWORD=your_minio_root_password
EOF

cat > pve2/netbox/.env << EOF
NETBOX_DB_PASSWORD=your_netbox_db_password
NETBOX_SECRET_KEY=your_netbox_secret_key
EOF
```

## 🛠️ Service Details

### PVE1 Services

#### Byte Stash
- **Purpose**: File sharing and storage
- **Port**: 8080
- **Data**: `./data`
- **Use Case**: Personal file sharing and backup

#### CasaOS
- **Purpose**: Home server management
- **Port**: 80
- **Volumes**: 
  - `/var/run/docker.sock`
  - `/var/lib/casaos`
- **Use Case**: Central management interface

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
# Update all services
for dir in */; do
  cd "$dir"
  docker compose pull
  docker compose up -d
  cd ..
done
```

### Backup Strategy
```bash
#!/bin/bash
# Backup script example
BACKUP_DIR="/backup/homelab"
DATE=$(date +%Y%m%d)

# Create backup directory
mkdir -p "$BACKUP_DIR/$DATE"

# Backup Docker volumes
for service in */; do
  service_name=$(basename "$service")
  tar -czf "$BACKUP_DIR/$DATE/$service_name.tar.gz" "$service"
done
```

### Monitoring
- Grafana dashboards for system metrics
- Tianji for service health
- Homarr for quick status overview

## 🔒 Security

### Best Practices
1. **Password Management**
   - Use strong, unique passwords
   - Store in password manager
   - Rotate regularly

2. **Network Security**
   - Use reverse proxy (Nginx/Traefik)
   - Enable SSL/TLS
   - Restrict access to management interfaces

3. **Container Security**
   - Regular updates
   - Resource limits
   - Network isolation

4. **Backup Security**
   - Encrypted backups
   - Off-site storage
   - Regular testing

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