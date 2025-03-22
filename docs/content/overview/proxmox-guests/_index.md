---
title: "Proxmox LXC Guests"
linkTitle: "Proxmox LXC Guests"
weight: 1
---

# 🖥️ Proxmox LXC Guests Overview

This guide provides an overview of all LXC guests running in our Proxmox environment across two nodes: `pve1.ahmed2` and `ahmed2`.

## 📊 Guest Distribution

### Node: pve1.ahmed2
- 🏠 CasaOS (ID: 101)
- 🎯 Homarr (ID: 105)
- 🌐 Cloudflared (ID: 100)
- 🛡️ Pi-hole (ID: 104)
- 📊 Proxmox Datacenter Manager (ID: 103)
- 💾 ByteStash (ID: 106)

### Node: ahmed2
- 🌐 Cloudflared (ID: 100)
- 📦 Apache CouchDB (ID: 102)
- 🔄 Jenkins (ID: 104)
- 🛡️ AdGuard (ID: 101)

## 🔮 Planned Future Guests

### Node: pve1.ahmed2
- 📺 Plex Media Server
  - **Purpose**: Media streaming and management
  - **Features**:
    - Video streaming
    - Music library
    - Photo management
  - **Resource Requirements**:
    - CPU: 2 cores
    - RAM: 4GB
    - Storage: 100GB

- 📝 NextCloud
  - **Purpose**: File synchronization and sharing
  - **Features**:
    - File sync
    - Calendar
    - Contacts
  - **Resource Requirements**:
    - CPU: 2 cores
    - RAM: 4GB
    - Storage: 200GB

- 🎮 Game Servers
  - **Purpose**: Gaming infrastructure
  - **Features**:
    - Minecraft server
    - Steam server
    - Game voice chat
  - **Resource Requirements**:
    - CPU: 4 cores
    - RAM: 8GB
    - Storage: 100GB

### Node: ahmed2
- 🔍 Elasticsearch
  - **Purpose**: Search and analytics
  - **Features**:
    - Full-text search
    - Log analysis
    - Data analytics
  - **Resource Requirements**:
    - CPU: 4 cores
    - RAM: 8GB
    - Storage: 200GB

- 📊 Grafana
  - **Purpose**: Metrics visualization
  - **Features**:
    - Dashboard creation
    - Alert management
    - Data visualization
  - **Resource Requirements**:
    - CPU: 2 cores
    - RAM: 4GB
    - Storage: 50GB

- 🔒 Vault
  - **Purpose**: Secrets management
  - **Features**:
    - Secret storage
    - Access control
    - Encryption
  - **Resource Requirements**:
    - CPU: 2 cores
    - RAM: 4GB
    - Storage: 50GB

## 🔍 Guest Details

### System Services

#### 🛡️ DNS & Network Protection
- **Pi-hole (ID: 104)**
  - **Purpose**: Network-wide DNS and DHCP server
  - **Features**:
    - DNS filtering
    - Ad blocking
    - DHCP management
  - **Resource Usage**: High CPU
  - **Node**: pve1.ahmed2

- **AdGuard (ID: 101)**
  - **Purpose**: Alternative DNS and network protection
  - **Features**:
    - DNS filtering
    - Parental control
    - Safe browsing
  - **Resource Usage**: High CPU
  - **Node**: ahmed2

#### 🌐 Network Services
- **Cloudflared (ID: 100)**
  - **Purpose**: Secure tunnel to Cloudflare
  - **Features**:
    - Zero-trust access
    - DDoS protection
    - SSL/TLS encryption
  - **Resource Usage**: High CPU
  - **Nodes**: Both pve1.ahmed2 and ahmed2

### Development & CI/CD

#### 🔄 Jenkins (ID: 104)
- **Purpose**: Continuous Integration/Deployment
- **Features**:
  - Build automation
  - Test automation
  - Deployment pipelines
- **Resource Usage**: High CPU
- **Node**: ahmed2

### Database Services

#### 📦 Apache CouchDB (ID: 102)
- **Purpose**: NoSQL database
- **Features**:
  - Document storage
  - Replication
  - REST API
- **Resource Usage**: High CPU
- **Node**: ahmed2

### Management & Monitoring

#### 🏠 CasaOS (ID: 101)
- **Purpose**: Home server management
- **Features**:
  - Container management
  - Service monitoring
  - Resource tracking
- **Resource Usage**: High CPU
- **Node**: pve1.ahmed2

#### 📊 Proxmox Datacenter Manager (ID: 103)
- **Purpose**: Proxmox cluster management
- **Features**:
  - Cluster monitoring
  - Resource management
  - Backup management
- **Resource Usage**: High CPU
- **Node**: pve1.ahmed2

### Dashboard & Interface

#### 🎯 Homarr (ID: 105)
- **Purpose**: Dashboard and service management
- **Features**:
  - Service aggregation
  - Custom dashboards
  - Quick access
- **Resource Usage**: High CPU
- **Node**: pve1.ahmed2

### Storage & Backup

#### 💾 ByteStash (ID: 106)
- **Purpose**: Data storage and backup
- **Features**:
  - File storage
  - Backup management
  - Data synchronization
- **Resource Usage**: High CPU
- **Node**: pve1.ahmed2

## 🔧 Resource Management

### CPU Usage Optimization
```bash
# Check CPU usage
top -b -n 1

# Monitor specific container
lxc monitor 101

# Set CPU limits
pct set 101 -cores 2
```

### Memory Management
```bash
# Check memory usage
free -h

# Set memory limits
pct set 101 -memory 2048
```

### Storage Management
```bash
# Check storage usage
df -h

# Monitor disk I/O
iostat -x 1
```

## 🛠️ Maintenance Procedures

### Regular Tasks
1. **Daily Checks**
   ```bash
   # Check container status
   pct list
   
   # Verify backups
   vzdump --list
   ```

2. **Weekly Maintenance**
   ```bash
   # Update containers
   pct update 101
   
   # Clean up old backups
   vzdump --cleanup
   ```

3. **Monthly Tasks**
   ```bash
   # Review resource usage
   pct monitor 101
   
   # Optimize storage
   pct resize 101 rootfs 10G
   ```

## 🔍 Troubleshooting

### Common Issues
1. **High CPU Usage**
   ```bash
   # Check process usage
   pct enter 101
   top
   
   # Monitor resource limits
   pct config 101
   ```

2. **Network Issues**
   ```bash
   # Check network config
   pct config 101 | grep net
   
   # Test connectivity
   pct exec 101 ping -c 4 8.8.8.8
   ```

3. **Storage Problems**
   ```bash
   # Check disk space
   pct exec 101 df -h
   
   # Verify mount points
   pct mount 101
   ```

## 📈 Performance Monitoring

### Resource Monitoring
```bash
# Real-time monitoring
pct monitor 101

# Historical data
rrdtool info /var/lib/rrdcached/db/pve2-storage.rrd
```

### Alert Configuration
```bash
# Set up alerts
pct set 101 -features nesting=1,keyctl=1

# Configure monitoring
pct config 101
```

## 🔄 Backup Procedures

### Automated Backups
```bash
# Create backup
vzdump 101

# Restore backup
vzrestore vzdump-lxc-101-2024_01_01-12_00_00.tar.gz 101
```

### Backup Verification
```bash
# List backups
vzdump --list

# Verify backup integrity
vzdump --verify vzdump-lxc-101-2024_01_01-12_00_00.tar.gz
```

## 📝 Next Steps

1. Review [Resource Allocation](/overview/proxmox-guests/resource-allocation/)
2. Configure [Monitoring](/overview/proxmox-guests/monitoring/)
3. Set up [Backup Procedures](/overview/proxmox-guests/backup/)
4. Implement [Security Measures](/overview/proxmox-guests/security/) 