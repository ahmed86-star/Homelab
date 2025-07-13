# 🏠 Homelab Infrastructure Documentation

<div align="center">

**🌐 Main Website:** [https://www.ahmed1.live/](https://www.ahmed1.live/)

[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/ahmed86-star/Homelab/docs.yml?label=Docs%20Build&logo=github)](https://github.com/ahmed86-star/Homelab/actions)
[![Documentation](https://img.shields.io/badge/docs-ahmed1.live-blue?logo=hugo&logoColor=white)](https://ahmed1.live)
[![License](https://img.shields.io/badge/license-MIT-green.svg?logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Docker Images](https://img.shields.io/badge/docker-ready-blue?logo=docker&logoColor=white)](https://github.com/ahmed86-star/Homelab/pkgs/container/homelab)
[![Last Commit](https://img.shields.io/github/last-commit/ahmed86-star/Homelab?logo=git&logoColor=white)](https://github.com/ahmed86-star/Homelab/commits/main)
[![Open Issues](https://img.shields.io/github/issues/ahmed86-star/Homelab?logo=github&logoColor=white)](https://github.com/ahmed86-star/Homelab/issues)

</div>

---

## 🚀 Welcome to My Homelab Journey!

Welcome to my **enterprise-grade homelab infrastructure**! This repository showcases my journey in building and maintaining a professional home lab environment for learning, testing, and self-hosting various services.

### 🎯 What You'll Find Here

- **🏗️ Infrastructure Documentation**: Complete setup guides and configurations
- **🔧 Self-Hosted Services**: 15+ production-ready applications
- **📊 Monitoring & Analytics**: Real-time system insights and dashboards
- **🔒 Security & Privacy**: Enterprise-grade security implementations
- **📚 Learning Resources**: Guides, tutorials, and best practices

### 🌟 Featured Technologies

![Proxmox](https://img.shields.io/badge/Proxmox-E57000?style=for-the-badge&logo=proxmox&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)
![InfluxDB](https://img.shields.io/badge/InfluxDB-22ADF6?style=for-the-badge&logo=influxdb&logoColor=white)
![Synology](https://img.shields.io/badge/Synology-00B2FF?style=for-the-badge&logo=synology&logoColor=white)

### 🔗 Quick Links

| Resource | Description | Link |
|----------|-------------|------|
| ![Website](https://img.shields.io/badge/Website-ahmed1.live-blue?style=flat&logo=globe&logoColor=white) | **Main Documentation Site** | [https://ahmed1.live](https://ahmed1.live) |
| ![GitHub](https://img.shields.io/badge/GitHub-Profile-black?style=flat&logo=github&logoColor=white) | **GitHub Profile** | [https://github.com/ahmed86-star](https://github.com/ahmed86-star) |
| ![Blog](https://img.shields.io/badge/Blog-Latest_Posts-orange?style=flat&logo=rss&logoColor=white) | **Blog & Updates** | [https://ahmed1.live/blog](https://ahmed1.live/blog) |

---

<div align="center">

![Homelab Infrastructure](https://github.com/user-attachments/assets/051afc2a-6f90-461a-9262-b7e57d2585a3)

*Enterprise-grade homelab infrastructure built with passion and precision*

</div>

---

## 📑 Table of Contents
- [🌟 Infrastructure Overview](#-infrastructure-overview)
- [🔗 Services & Applications](#-services--applications)
- [🚀 Featured Projects](#-featured-projects)
- [📚 Documentation](#-documentation)
- [🛠️ Tech Stack](#️-tech-stack)
- [📈 Current Status](#-current-status)
- [🎯 Roadmap](#-roadmap)
- [🔧 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [📞 Support](#-support)
- [📊 Stats](#-stats)

## 🌟 Infrastructure Overview

### 🖥️ Compute Resources

#### ![Proxmox](https://img.shields.io/badge/Proxmox-E57000?style=for-the-badge&logo=proxmox&logoColor=white) Proxmox Virtual Environment Cluster

**Enterprise-grade virtualization platform** with high availability and advanced management capabilities.

**🔧 Core Features:**
- **High Availability (HA)** setup with multiple nodes for redundancy
- **Resource monitoring** and intelligent load balancing
- **Container & VM support** with LXC and KVM virtualization
- **ZFS storage integration** for enterprise-grade data integrity
- **Live migration** between cluster nodes
- **Backup & restore** with deduplication support

**📊 Cluster Configuration:**
- **Node 1 (PVE1)**: Primary compute node
- **Node 2 (PVE2)**: Secondary compute node  
- **Shared Storage**: ZFS pool with RAID configuration
- **Network**: 10GbE interconnect for high-speed data transfer

---

### 💾 Storage Solutions

#### ![Synology](https://img.shields.io/badge/Synology-00B2FF?style=for-the-badge&logo=synology&logoColor=white) Synology NAS - DS918+

**Professional network-attached storage** optimized for home and small business use.

**🖥️ Hardware Specifications:**
- **Model**: DS918+ (4-bay NAS)
- **CPU**: Intel Celeron J3455 quad-core
- **RAM**: 4GB DDR3L (expandable to 8GB)
- **Network**: 2x Gigabit Ethernet with Link Aggregation

**💿 Storage Configuration:**
```
Storage Pool: SHR (Synology Hybrid RAID)
├── 4x 4TB NAS drives (WD Red/Seagate IronWolf)
├── 2x 500GB NVMe SSD cache drives
└── File System: Btrfs with data integrity
```

**📁 Available Services:**
- **Docker Containers**: Containerized applications
- **File Sharing**: SMB/NFS protocols for cross-platform access
- **Time Machine Backups**: macOS backup integration
- **Surveillance Station**: IP camera management
- **Cloud Sync**: Multi-cloud synchronization
- **Photo Station**: Photo management and sharing

**🔒 Data Protection:**
- **RAID Protection**: SHR provides 1-2 disk fault tolerance
- **Snapshot Replication**: Point-in-time data recovery
- **Encrypted Volumes**: AES-256 encryption for sensitive data
- **Backup Strategy**: 3-2-1 backup methodology

---

### 🌐 Network Infrastructure

#### ![Network](https://img.shields.io/badge/Network-00D4AA?style=for-the-badge&logo=network&logoColor=white) Enterprise Network Setup

**Professional networking infrastructure** with VLAN segmentation and advanced features.

#### 🛰️ Core Network Equipment

| Device | Model | Type | Specifications | Features |
|--------|-------|------|----------------|----------|
| ![TP-Link](https://img.shields.io/badge/TP--Link-00D4AA?style=flat&logo=tp-link&logoColor=white) **Router** | Archer AX20 | Wi-Fi 6 Router | **Speed**: AX1800 (1800 Mbps)<br>**Ports**: 4x Gigabit LAN, 1x Gigabit WAN<br>**Wi-Fi**: 802.11ax (Wi-Fi 6) | • Dual-band Wi-Fi 6<br>• MU-MIMO technology<br>• Advanced QoS<br>• Parental controls |
| ![Netgear](https://img.shields.io/badge/Netgear-00D4AA?style=flat&logo=netgear&logoColor=white) **Switch** | GS108Ev4 | Managed Switch | **Ports**: 8x Gigabit Ethernet<br>**Management**: Web-based | • VLAN support<br>• QoS prioritization<br>• Link aggregation<br>• Port mirroring |

#### 🌍 Network Segmentation

**VLAN Architecture** for security and traffic isolation:

| VLAN | Purpose | Subnet | Description |
|------|---------|--------|-------------|
| **VLAN 10** | Management | `10.0.10.0/24` | Network administration and monitoring |
| **VLAN 20** | IoT Devices | `10.0.20.0/24` | Smart home devices and sensors |
| **VLAN 30** | Guest Network | `10.0.30.0/24` | Visitor access with internet-only |
| **VLAN 40** | Storage Network | `10.0.40.0/24` | High-speed storage traffic |

#### 🔒 Network Security Features

- **Firewall Rules**: Granular traffic control
- **Intrusion Detection**: Network monitoring and alerts
- **VPN Access**: Secure remote connectivity
- **DNS Filtering**: Ad-blocking and content filtering
- **Traffic Shaping**: Bandwidth management and QoS

#### 📡 Wireless Coverage

- **Wi-Fi 6 Technology**: Latest wireless standard
- **Dual-Band Operation**: 2.4GHz and 5GHz bands
- **MU-MIMO**: Multi-user multiple input/output
- **Beamforming**: Optimized signal direction
- **Coverage**: Whole-home wireless coverage

---

### 🔋 Power & Environmental

#### ⚡ Power Management
- **UPS Protection**: Uninterruptible power supply for critical equipment
- **Power Monitoring**: Real-time power consumption tracking
- **Efficient Hardware**: Energy-star compliant components
- **Automated Shutdown**: Graceful shutdown on power loss

#### 🌡️ Environmental Control
- **Temperature Monitoring**: Real-time thermal monitoring
- **Ventilation**: Optimized airflow for equipment cooling
- **Humidity Control**: Maintained at optimal levels
- **Dust Management**: Regular cleaning and filtration

## 🔗 Services & Applications

### 🌐 Web Services & Documentation
| Service | Description | Official Website | Status |
|---------|-------------|------------------|--------|
| ![Hugo](https://img.shields.io/badge/Hugo-FF4088?style=for-the-badge&logo=hugo&logoColor=white) **Main Documentation** | Hugo-based documentation site | [https://gohugo.io](https://gohugo.io) | 🟢 Active |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) **Homelab Website** | Next.js modern website | [https://nextjs.org](https://nextjs.org) | 🟢 Active |
| ![CasaOS](https://img.shields.io/badge/CasaOS-00D4AA?style=for-the-badge&logo=casaos&logoColor=white) **CasaOS** | Home cloud OS & file manager | [https://casaos.zimaspace.com](https://casaos.zimaspace.com) | 🟢 Active |

### 📊 Monitoring & Analytics
| Service | Description | Official Website | Status |
|---------|-------------|------------------|--------|
| ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white) **Grafana** | Metrics visualization & dashboards | [https://grafana.com](https://grafana.com) | 🟢 Active |
| ![InfluxDB](https://img.shields.io/badge/InfluxDB-22ADF6?style=for-the-badge&logo=influxdb&logoColor=white) **InfluxDB** | Time-series database | [https://influxdata.com](https://influxdata.com) | 🟢 Active |
| ![Tianji](https://img.shields.io/badge/Tianji-FF6B35?style=for-the-badge&logo=tianji&logoColor=white) **Tianji** | System monitoring dashboard | [https://github.com/jeessy2/tianji](https://github.com/jeessy2/tianji) | 🟢 Active |

### 🔒 Security & DNS
| Service | Description | Official Website | Status |
|---------|-------------|------------------|--------|
| ![AdGuard](https://img.shields.io/badge/AdGuard-68BC71?style=for-the-badge&logo=adguard&logoColor=white) **AdGuard Home** | DNS ad-blocker & network protection | [https://adguard.com/en/adguard-home.html](https://adguard.com/en/adguard-home.html) | 🟢 Active |
| ![Pi-hole](https://img.shields.io/badge/Pi--hole-96060C?style=for-the-badge&logo=pi-hole&logoColor=white) **Pi-hole** | DNS sinkhole & ad blocking | [https://pi-hole.net](https://pi-hole.net) | 🟢 Active |
| ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white) **Cloudflared** | Secure tunnel service | [https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/tunnel-guide) | 🟢 Active |

### 🛠️ Development & DevOps
| Service | Description | Official Website | Status |
|---------|-------------|------------------|--------|
| ![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white) **Jenkins** | CI/CD automation server | [https://jenkins.io](https://jenkins.io) | 🟢 Active |
| ![NetBox](https://img.shields.io/badge/NetBox-1A1A1A?style=for-the-badge&logo=netbox&logoColor=white) **NetBox** | Network infrastructure documentation | [https://netbox.readthedocs.io](https://netbox.readthedocs.io) | 🟢 Active |

### 📁 Storage & File Management
| Service | Description | Official Website | Status |
|---------|-------------|------------------|--------|
| ![MinIO](https://img.shields.io/badge/MinIO-FF0000?style=for-the-badge&logo=minio&logoColor=white) **MinIO** | S3-compatible object storage | [https://min.io](https://min.io) | 🟢 Active |
| ![Byte-stash](https://img.shields.io/badge/Byte--stash-00D4AA?style=for-the-badge&logo=byte-stash&logoColor=white) **Byte-stash** | File sharing & storage | [https://github.com/byte-stash/byte-stash](https://github.com/byte-stash/byte-stash) | 🟢 Active |

### 📝 Productivity & Notes
| Service | Description | Official Website | Status |
|---------|-------------|------------------|--------|
| ![Trillium](https://img.shields.io/badge/Trillium-FF6B35?style=for-the-badge&logo=trillium&logoColor=white) **Trillium** | Personal knowledge base | [https://trillium.app](https://trillium.app) | 🟢 Active |
| ![OpenWebUI](https://img.shields.io/badge/OpenWebUI-00D4AA?style=for-the-badge&logo=openwebui&logoColor=white) **OpenWebUI** | AI chat interface | [https://openwebui.com](https://openwebui.com) | 🟢 Active |

### 🏠 Home Management
| Service | Description | Official Website | Status |
|---------|-------------|------------------|--------|
| ![Homarr](https://img.shields.io/badge/Homarr-00D4AA?style=for-the-badge&logo=homarr&logoColor=white) **Homarr** | Application dashboard & homepage | [https://homarr.dev](https://homarr.dev) | 🟢 Active |

---

**📋 Service Status Legend:**
- 🟢 Active - Service is running and accessible
- 🟡 Maintenance - Service is being updated/maintained
- 🔴 Down - Service is currently unavailable
- ⚪ Planned - Service is planned for future deployment

**🔗 Access Notes:**
- **Official Websites**: Learn more about each service, documentation, and community
- All services are self-hosted in a secure homelab environment
- Services are protected behind reverse proxy and SSL certificates
- Internal network services are secured with proper authentication and access controls

## 🚀 Featured Projects

### 🔒 Security Infrastructure
- **Authentication & Authorization**
  - SSO & 2FA solution
  - LDAP integration
  - OAuth2 proxy
- **Network Security**
  - IDS/IPS
  - VPN server
  - DNS filtering
- **Monitoring & Logging**
  - Security event monitoring
  - Log aggregation
  - Threat detection

### 📊 Monitoring Stack
- **Metrics Collection**
  - System metrics
  - Application metrics
  - Network metrics
- **Visualization**
  - Custom dashboards
  - Alert management
  - Reporting system
- **Log Management**
  - Centralized logging
  - Log parsing
  - Search capabilities

### 🎮 Media Server
- **Media Management**
  - Automated library updates
  - Metadata management
  - Transcoding support
- **Content Organization**
  - TV shows
  - Movies
  - Music
  - Photos
- **Streaming Features**
  - Remote access
  - Multiple users
  - Watch history sync

## ⚡ Performance

| Service | Response Time | Uptime | Load |
|---------|--------------|--------|------|
| Documentation | ![Response](https://img.shields.io/badge/200ms-green?logo=speedtest&label=Response) | ![Uptime](https://img.shields.io/badge/99.9%25-green?logo=statuspage&label=Uptime) | ![Load](https://img.shields.io/badge/Low-green?logo=serverfault&label=Load) |
| Proxmox | ![Response](https://img.shields.io/badge/150ms-green?logo=speedtest&label=Response) | ![Uptime](https://img.shields.io/badge/99.99%25-green?logo=statuspage&label=Uptime) | ![Load](https://img.shields.io/badge/Medium-yellow?logo=serverfault&label=Load) |
| Storage | ![Response](https://img.shields.io/badge/5ms-green?logo=speedtest&label=Response) | ![Uptime](https://img.shields.io/badge/99.999%25-green?logo=statuspage&label=Uptime) | ![Load](https://img.shields.io/badge/High-red?logo=serverfault&label=Load) |

## 🔧 Installation

Detailed installation guides for each component:

### 🖥️ Core Infrastructure
- Proxmox VE setup
- Storage configuration
- Network setup
- Backup system

### 📦 Applications
- Container deployment
- Service configuration
- Integration setup
- Monitoring implementation

### 🔐 Security
- Firewall rules
- VPN configuration
- Certificate management
- Access control

## ⚙️ Configuration

### 🌐 Network Configuration
```yaml
networks:
  management:
    vlan: 10
    subnet: 10.0.10.0/24
  storage:
    vlan: 20
    subnet: 10.0.20.0/24
  services:
    vlan: 30
    subnet: 10.0.30.0/24
```

### 💾 Storage Layout
```yaml
storage:
  pools:
    - name: main
      type: zfs
      size: 16TB
      redundancy: raidz2
    - name: backup
      type: zfs
      size: 32TB
      redundancy: mirror
```

## 📈 Statistics

### 📊 Repository Stats
![GitHub Language Count](https://img.shields.io/github/languages/count/ahmed86-star/Homelab?logo=github&label=Languages)
![GitHub Code Size](https://img.shields.io/github/languages/code-size/ahmed86-star/Homelab?logo=github&label=Code%20Size)
![GitHub Repo Size](https://img.shields.io/github/repo-size/ahmed86-star/Homelab?logo=github&label=Repo%20Size)
![GitHub Last Commit](https://img.shields.io/github/last-commit/ahmed86-star/Homelab?logo=github&label=Last%20Commit)

### 🌟 Social Stats
![GitHub Stars](https://img.shields.io/github/stars/ahmed86-star/Homelab?style=social)
![GitHub Forks](https://img.shields.io/github/forks/ahmed86-star/Homelab?style=social)
![GitHub Followers](https://img.shields.io/github/followers/ahmed86-star?style=social)
![GitHub Discussions](https://img.shields.io/github/discussions/ahmed86-star/Homelab?style=social)

### 📱 Tech Stack Status
![Hugo](https://img.shields.io/badge/Hugo-ready-success?logo=hugo)
![Docker](https://img.shields.io/badge/Docker-ready-success?logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-planned-yellow?logo=kubernetes)
![Terraform](https://img.shields.io/badge/Terraform-planned-yellow?logo=terraform)
![Ansible](https://img.shields.io/badge/Ansible-ready-success?logo=ansible)

---

<p align="center">
  <a href="https://ahmed1.live">
    <img src="https://img.shields.io/badge/🏠_Homepage-ahmed1.live-blue?style=for-the-badge" alt="Homepage">
  </a>
</p>

<p align="center">
  <a href="https://github.com/ahmed86-star">
    <img src="https://img.shields.io/badge/GitHub-Profile-black?style=flat&logo=github" alt="GitHub">
  </a>
  •
  <a href="https://ahmed1.live/blog">
    <img src="https://img.shields.io/badge/Blog-Latest_Posts-orange?style=flat&logo=rss" alt="Blog">
  </a>
  •
  <a href="https://ahmed1.live/docs">
    <img src="https://img.shields.io/badge/Docs-Documentation-blue?style=flat&logo=readthedocs" alt="Documentation">
  </a>
</p>
