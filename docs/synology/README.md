# 🖥️ Synology NAS Documentation

**Professional network-attached storage** configuration and applications documentation.

## 📋 Overview

This directory contains comprehensive documentation for the **Synology DS918+** NAS setup, including installed applications, configurations, and management procedures.

### 🖥️ Hardware Specifications

| Component | Specification | Details |
|-----------|---------------|---------|
| **Model** | DS918+ | 4-bay NAS with expansion capabilities |
| **CPU** | Intel Celeron J3455 | Quad-core 1.5GHz (burst up to 2.3GHz) |
| **RAM** | 4GB DDR3L | Expandable to 8GB |
| **Storage** | 4x 4TB NAS drives | SHR (Synology Hybrid RAID) configuration |
| **Cache** | 2x 500GB NVMe SSD | Read/write cache for performance |
| **Network** | 2x Gigabit Ethernet | Link Aggregation support |
| **File System** | Btrfs | Advanced data integrity and snapshots |

---

## 📱 Installed Applications

### 🔧 System & Management
| Application | Description | Official Website | Status |
|-------------|-------------|------------------|--------|
| ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) **Docker** | Container management platform | [https://www.docker.com](https://www.docker.com) | 🟢 Active |
| ![Synology Drive](https://img.shields.io/badge/Synology_Drive-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Drive** | File synchronization and sharing | [https://www.synology.com/dsm/feature/drive](https://www.synology.com/dsm/feature/drive) | 🟢 Active |
| ![File Station](https://img.shields.io/badge/File_Station-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **File Station** | Web-based file management | [https://www.synology.com/dsm/feature/file_station](https://www.synology.com/dsm/feature/file_station) | 🟢 Active |

### 📊 Backup & Storage
| Application | Description | Official Website | Status |
|-------------|-------------|------------------|--------|
| ![Hyper Backup](https://img.shields.io/badge/Hyper_Backup-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Hyper Backup** | Comprehensive backup solution | [https://www.synology.com/dsm/feature/hyper_backup](https://www.synology.com/dsm/feature/hyper_backup) | 🟢 Active |
| ![Snapshot Replication](https://img.shields.io/badge/Snapshot_Replication-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Snapshot Replication** | Point-in-time data recovery | [https://www.synology.com/dsm/feature/snapshot_replication](https://www.synology.com/dsm/feature/snapshot_replication) | 🟢 Active |
| ![Cloud Sync](https://img.shields.io/badge/Cloud_Sync-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Cloud Sync** | Multi-cloud synchronization | [https://www.synology.com/dsm/feature/cloud_sync](https://www.synology.com/dsm/feature/cloud_sync) | 🟢 Active |

### 🎮 Media & Entertainment
| Application | Description | Official Website | Status |
|-------------|-------------|------------------|--------|
| ![Video Station](https://img.shields.io/badge/Video_Station-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Video Station** | Video library management | [https://www.synology.com/dsm/feature/video_station](https://www.synology.com/dsm/feature/video_station) | 🟢 Active |
| ![Audio Station](https://img.shields.io/badge/Audio_Station-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Audio Station** | Music library management | [https://www.synology.com/dsm/feature/audio_station](https://www.synology.com/dsm/feature/audio_station) | 🟢 Active |
| ![Photo Station](https://img.shields.io/badge/Photo_Station-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Photo Station** | Photo management and sharing | [https://www.synology.com/dsm/feature/photo_station](https://www.synology.com/dsm/feature/photo_station) | 🟢 Active |

### 🔒 Security & Surveillance
| Application | Description | Official Website | Status |
|-------------|-------------|------------------|--------|
| ![Surveillance Station](https://img.shields.io/badge/Surveillance_Station-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Surveillance Station** | IP camera management | [https://www.synology.com/dsm/feature/surveillance_station](https://www.synology.com/dsm/feature/surveillance_station) | 🟢 Active |
| ![Security Advisor](https://img.shields.io/badge/Security_Advisor-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Security Advisor** | Security assessment tool | [https://www.synology.com/dsm/feature/security_advisor](https://www.synology.com/dsm/feature/security_advisor) | 🟢 Active |
| ![VPN Server](https://img.shields.io/badge/VPN_Server-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **VPN Server** | Remote access solution | [https://www.synology.com/dsm/feature/vpn_server](https://www.synology.com/dsm/feature/vpn_server) | 🟢 Active |

### 🌐 Network & Services
| Application | Description | Official Website | Status |
|-------------|-------------|------------------|--------|
| ![Download Station](https://img.shields.io/badge/Download_Station-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Download Station** | Torrent and download manager | [https://www.synology.com/dsm/feature/download_station](https://www.synology.com/dsm/feature/download_station) | 🟢 Active |
| ![Web Station](https://img.shields.io/badge/Web_Station-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Web Station** | Web server hosting | [https://www.synology.com/dsm/feature/web_station](https://www.synology.com/dsm/feature/web_station) | 🟢 Active |
| ![Mail Server](https://img.shields.io/badge/Mail_Server-00B2FF?style=for-the-badge&logo=synology&logoColor=white) **Mail Server** | Email server solution | [https://www.synology.com/dsm/feature/mail_server](https://www.synology.com/dsm/feature/mail_server) | 🟢 Active |

---

## 🐳 Docker Containers

### 📊 Monitoring & Analytics
| Container | Description | Official Image | Status |
|-----------|-------------|----------------|--------|
| ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white) **Grafana** | Metrics visualization | [grafana/grafana](https://hub.docker.com/r/grafana/grafana) | 🟢 Active |
| ![InfluxDB](https://img.shields.io/badge/InfluxDB-22ADF6?style=for-the-badge&logo=influxdb&logoColor=white) **InfluxDB** | Time-series database | [influxdb:latest](https://hub.docker.com/_/influxdb) | 🟢 Active |
| ![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white) **Prometheus** | Metrics collection | [prom/prometheus](https://hub.docker.com/r/prom/prometheus) | 🟢 Active |

### 🔒 Security & Privacy
| Container | Description | Official Image | Status |
|-----------|-------------|----------------|--------|
| ![Pi-hole](https://img.shields.io/badge/Pi--hole-96060C?style=for-the-badge&logo=pi-hole&logoColor=white) **Pi-hole** | DNS ad-blocker | [pihole/pihole](https://hub.docker.com/r/pihole/pihole) | 🟢 Active |
| ![AdGuard Home](https://img.shields.io/badge/AdGuard_Home-68BC71?style=for-the-badge&logo=adguard&logoColor=white) **AdGuard Home** | DNS protection | [adguard/adguardhome](https://hub.docker.com/r/adguard/adguardhome) | 🟢 Active |
| ![WireGuard](https://img.shields.io/badge/WireGuard-88171A?style=for-the-badge&logo=wireguard&logoColor=white) **WireGuard** | VPN server | [linuxserver/wireguard](https://hub.docker.com/r/linuxserver/wireguard) | 🟢 Active |

### 📁 File Management
| Container | Description | Official Image | Status |
|-----------|-------------|----------------|--------|
| ![Nextcloud](https://img.shields.io/badge/Nextcloud-0082C9?style=for-the-badge&logo=nextcloud&logoColor=white) **Nextcloud** | File sharing platform | [nextcloud:latest](https://hub.docker.com/_/nextcloud) | 🟢 Active |
| ![Filebrowser](https://img.shields.io/badge/Filebrowser-00D4AA?style=for-the-badge&logo=filebrowser&logoColor=white) **Filebrowser** | Web file manager | [filebrowser/filebrowser](https://hub.docker.com/r/filebrowser/filebrowser) | 🟢 Active |
| ![Syncthing](https://img.shields.io/badge/Syncthing-00D4AA?style=for-the-badge&logo=syncthing&logoColor=white) **Syncthing** | File synchronization | [linuxserver/syncthing](https://hub.docker.com/r/linuxserver/syncthing) | 🟢 Active |

---

## 📊 Storage Configuration

### 💾 Storage Pool Layout
```
Storage Pool: SHR (Synology Hybrid RAID)
├── Volume 1: Main Storage (12TB usable)
│   ├── 4x 4TB NAS drives (WD Red/Seagate IronWolf)
│   ├── 2x 500GB NVMe SSD cache drives
│   └── File System: Btrfs with data integrity
└── Volume 2: Backup Storage (4TB)
    ├── 2x 4TB drives in mirror
    └── Encrypted volume for sensitive data
```

### 🔒 Data Protection Features
- **RAID Protection**: SHR provides 1-2 disk fault tolerance
- **Snapshot Replication**: Point-in-time data recovery
- **Encrypted Volumes**: AES-256 encryption for sensitive data
- **Backup Strategy**: 3-2-1 backup methodology
- **Data Scrubbing**: Regular integrity checks

### 📈 Performance Optimization
- **SSD Cache**: Read/write cache for frequently accessed data
- **Link Aggregation**: Bonded network interfaces for higher throughput
- **Memory Optimization**: Dedicated RAM for caching operations
- **Compression**: Btrfs compression for storage efficiency

---

## 🔧 Configuration Files

### 📁 Directory Structure
```
synology/
├── README.md                    # This documentation
├── docker-compose/              # Docker container configurations
│   ├── monitoring.yml           # Monitoring stack setup
│   ├── security.yml             # Security containers
│   └── file-management.yml      # File management services
├── scripts/                     # Automation scripts
│   ├── backup-scripts/          # Backup automation
│   ├── monitoring-scripts/      # Monitoring setup
│   └── maintenance-scripts/     # System maintenance
├── configs/                     # Application configurations
│   ├── docker/                  # Docker configurations
│   ├── synology-apps/           # Synology app configs
│   └── network/                 # Network configurations
└── docs/                        # Additional documentation
    ├── setup-guides/            # Installation guides
    ├── troubleshooting/         # Problem-solving guides
    └── best-practices/          # Optimization guides
```

---

## 📋 Maintenance Schedule

### 🔄 Regular Maintenance Tasks
| Task | Frequency | Description |
|------|-----------|-------------|
| **System Updates** | Weekly | DSM and package updates |
| **Security Scans** | Weekly | Vulnerability assessments |
| **Backup Verification** | Monthly | Test backup integrity |
| **Storage Health Check** | Monthly | Disk health monitoring |
| **Performance Optimization** | Quarterly | System tuning and cleanup |
| **Hardware Inspection** | Semi-annually | Physical maintenance |

### 📊 Monitoring Alerts
- **Disk Health**: SMART monitoring and alerts
- **Storage Space**: Capacity utilization warnings
- **Network Performance**: Bandwidth and latency monitoring
- **Security Events**: Intrusion detection alerts
- **Backup Status**: Automated backup verification

---

## 🔗 Quick Access

### 🌐 Web Interfaces
- **DSM (DiskStation Manager)**: `https://synology.local:5001`
- **Docker Management**: `https://synology.local:9000`
- **File Station**: `https://synology.local:5000`
- **Surveillance Station**: `https://synology.local:5000/surveillance`

### 📱 Mobile Apps
- **DS File**: File management on mobile
- **DS Video**: Video streaming
- **DS Audio**: Music streaming
- **DS Photo**: Photo management
- **DS Cam**: Surveillance monitoring

---

**📋 Status Legend:**
- 🟢 Active - Service is running and accessible
- 🟡 Maintenance - Service is being updated/maintained
- 🔴 Down - Service is currently unavailable
- ⚪ Planned - Service is planned for future deployment

**🔒 Security Notes:**
- All services are protected with SSL/TLS encryption
- Regular security updates and vulnerability scans
- Access control with principle of least privilege
- Encrypted volumes for sensitive data storage 

---

## ☁️ Cloudflare Zero Trust & Tunnels

Expose Synology services securely to the Internet without opening inbound ports or relying on your ISP router. Cloudflare Tunnel (cloudflared) creates an outbound-only, encrypted tunnel from your NAS to Cloudflare’s edge.

### ✅ Why use Cloudflare Tunnel
- **Zero inbound ports**: No port-forwarding or UPnP required
- **Global TLS**: Automatic HTTPS certificates at the edge
- **DDoS/WAF**: Traffic is filtered by Cloudflare before it reaches you
- **Identity-aware access**: Protect apps with Cloudflare Access (SSO, OTP)

### 🧰 Prerequisites
- Cloudflare account and a zone (domain) added to Cloudflare DNS
- Optional: Cloudflare Zero Trust (for Access policies)
- Docker running on Synology

### 🚀 Option A: Quick start with Tunnel Token (recommended)
Use a single token from the Cloudflare Dashboard → Zero Trust → Networks → Tunnels → Create → Docker.

1) Put the token in `.env` (or your secrets store):
```
CLOUDFLARE_TUNNEL_TOKEN=YOUR_LONG_TUNNEL_TOKEN_HERE
```

2) Add a `cloudflared` service to your compose stack (do not publish ports):
```yaml
services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: synology-cloudflared
    restart: unless-stopped
    command: tunnel --no-autoupdate run --token ${CLOUDFLARE_TUNNEL_TOKEN}
    networks:
      - synology-network
```

Cloudflare automatically creates a tunnel endpoint like `<tunnel-id>.cfargotunnel.com`. In the Tunnels page, add public hostnames and map them to your internal services.

### ⚙️ Option B: Named Tunnel with config.yml
This option gives you explicit control with an `ingress` config.

1) Create a tunnel in the Cloudflare Dashboard and download credentials, or use `cloudflared tunnel create` from a temporary machine.

2) Place the credentials file in the repo (example path):
```
configs/cloudflared/<TUNNEL_ID>.json
```

3) Create `configs/cloudflared/config.yml`:
```yaml
tunnel: <TUNNEL_ID>
credentials-file: /etc/cloudflared/<TUNNEL_ID>.json

ingress:
  - hostname: grafana.yourdomain.com
    service: http://grafana:3000
  - hostname: nextcloud.yourdomain.com
    service: http://nextcloud:80
  - hostname: pihole.yourdomain.com
    service: http://pihole:80
  - hostname: prometheus.yourdomain.com
    service: http://prometheus:9090
  - service: http_status:404
```

4) Compose service (no ports needed):
```yaml
services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: synology-cloudflared
    restart: unless-stopped
    volumes:
      - ./configs/cloudflared:/etc/cloudflared:ro
    command: tunnel --no-autoupdate run
    networks:
      - synology-network
```

Make sure your application services share the same Docker network (`synology-network`) so `cloudflared` can reach them by container name.

### 🌐 DNS Setup
- For Option A, add hostnames in the Tunnels page; Cloudflare will create proxied DNS records automatically.
- For Option B, create `CNAME` records pointing to `<tunnel-id>.cfargotunnel.com` for each hostname (orange-cloud/proxied ON).

### 🔐 Cloudflare Access (Optional but Recommended)
Protect private apps (e.g., Grafana, Nextcloud admin) with identity-aware policies:
- Zero Trust → Access → Applications → Add application
- Type: Self-hosted → Domain: `grafana.yourdomain.com`
- Policies: e.g., Emails ending with `@yourmail.com`, One-Time PIN, GitHub/Google SSO

### 🧪 Health & Troubleshooting
- View logs: `docker logs -f synology-cloudflared`
- Validate config: `cloudflared tunnel ingress validate` (inside container)
- Common fixes:
  - 404: Ensure `ingress` rules end with a catch-all `http_status:404`
  - 502/Bad gateway: Container name/port mismatch or service not on same network
  - DNS not resolving: Confirm CNAME is proxied (orange cloud) and hostnames match

### 🔎 Example Mappings (from this repo)
- Grafana → `http://grafana:3000` (compose: `docs/synology/docker-compose/monitoring.yml`)
- Prometheus → `http://prometheus:9090`
- Nextcloud → `http://nextcloud:80` (container listens 80, even if host maps 8080)
- Pi-hole → `http://pihole:80`

With this setup, your Synology services are reachable at `https://<app>.yourdomain.com` over Cloudflare’s secure edge without exposing your home network.