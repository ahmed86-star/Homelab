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

**Enterprise-grade security implementation** with comprehensive protection layers.

#### 🛡️ Authentication & Authorization
| Component | Description | Official Website | Status |
|-----------|-------------|------------------|--------|
| ![SSO](https://img.shields.io/badge/SSO-00D4AA?style=for-the-badge&logo=sso&logoColor=white) **Single Sign-On** | Centralized authentication system | [https://www.okta.com](https://www.okta.com) | 🟢 Active |
| ![LDAP](https://img.shields.io/badge/LDAP-00D4AA?style=for-the-badge&logo=ldap&logoColor=white) **LDAP Integration** | Directory services integration | [https://www.openldap.org](https://www.openldap.org) | 🟢 Active |
| ![OAuth2](https://img.shields.io/badge/OAuth2-00D4AA?style=for-the-badge&logo=oauth&logoColor=white) **OAuth2 Proxy** | Secure API authentication | [https://oauth2-proxy.github.io](https://oauth2-proxy.github.io) | 🟢 Active |

#### 🌐 Network Security
| Component | Description | Official Website | Status |
|-----------|-------------|------------------|--------|
| ![IDS/IPS](https://img.shields.io/badge/IDS/IPS-FF6B35?style=for-the-badge&logo=security&logoColor=white) **Intrusion Detection** | Network threat monitoring | [https://www.snort.org](https://www.snort.org) | 🟢 Active |
| ![VPN](https://img.shields.io/badge/VPN-00D4AA?style=for-the-badge&logo=vpn&logoColor=white) **VPN Server** | Secure remote access | [https://openvpn.net](https://openvpn.net) | 🟢 Active |
| ![DNS Filtering](https://img.shields.io/badge/DNS_Filtering-68BC71?style=for-the-badge&logo=dns&logoColor=white) **DNS Protection** | Ad-blocking and content filtering | [https://pi-hole.net](https://pi-hole.net) | 🟢 Active |

#### 📊 Security Monitoring
| Component | Description | Official Website | Status |
|-----------|-------------|------------------|--------|
| ![SIEM](https://img.shields.io/badge/SIEM-FF6B35?style=for-the-badge&logo=security&logoColor=white) **Security Events** | Real-time threat detection | [https://www.elastic.co/security](https://www.elastic.co/security) | 🟢 Active |
| ![Log Aggregation](https://img.shields.io/badge/Log_Aggregation-00D4AA?style=for-the-badge&logo=log&logoColor=white) **Centralized Logging** | Security log management | [https://www.graylog.org](https://www.graylog.org) | 🟢 Active |

---

### 📊 Monitoring & Analytics Stack

**Comprehensive monitoring solution** for infrastructure and application insights.

#### 📈 Metrics Collection
| Component | Description | Official Website | Status |
|-----------|-------------|------------------|--------|
| ![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white) **System Metrics** | Time-series data collection | [https://prometheus.io](https://prometheus.io) | 🟢 Active |
| ![Node Exporter](https://img.shields.io/badge/Node_Exporter-00D4AA?style=for-the-badge&logo=node&logoColor=white) **Hardware Monitoring** | System resource metrics | [https://github.com/prometheus/node_exporter](https://github.com/prometheus/node_exporter) | 🟢 Active |
| ![Network Monitoring](https://img.shields.io/badge/Network_Monitoring-00D4AA?style=for-the-badge&logo=network&logoColor=white) **Network Metrics** | Traffic and performance data | [https://www.zabbix.com](https://www.zabbix.com) | 🟢 Active |

#### 📊 Visualization & Alerting
| Component | Description | Official Website | Status |
|-----------|-------------|------------------|--------|
| ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white) **Dashboards** | Custom monitoring dashboards | [https://grafana.com](https://grafana.com) | 🟢 Active |
| ![AlertManager](https://img.shields.io/badge/AlertManager-FF6B35?style=for-the-badge&logo=alert&logoColor=white) **Alert Management** | Intelligent alert routing | [https://prometheus.io/docs/alerting/latest/alertmanager](https://prometheus.io/docs/alerting/latest/alertmanager) | 🟢 Active |

#### 📝 Log Management
| Component | Description | Official Website | Status |
|-----------|-------------|------------------|--------|
| ![ELK Stack](https://img.shields.io/badge/ELK_Stack-00D4AA?style=for-the-badge&logo=elastic&logoColor=white) **Centralized Logging** | Log aggregation and analysis | [https://www.elastic.co/elk-stack](https://www.elastic.co/elk-stack) | 🟢 Active |
| ![Fluentd](https://img.shields.io/badge/Fluentd-00D4AA?style=for-the-badge&logo=fluentd&logoColor=white) **Log Processing** | Data collection and routing | [https://www.fluentd.org](https://www.fluentd.org) | 🟢 Active |

---

### 🎮 Media Server Infrastructure

**Professional media management system** with automated workflows.

#### 🎬 Media Management
| Component | Description | Official Website | Status |
|-----------|-------------|------------------|--------|
| ![Plex](https://img.shields.io/badge/Plex-E5A00D?style=for-the-badge&logo=plex&logoColor=white) **Media Server** | Automated library management | [https://www.plex.tv](https://www.plex.tv) | 🟢 Active |
| ![Sonarr](https://img.shields.io/badge/Sonarr-35C5F4?style=for-the-badge&logo=sonarr&logoColor=white) **TV Shows** | Automated TV show management | [https://sonarr.tv](https://sonarr.tv) | 🟢 Active |
| ![Radarr](https://img.shields.io/badge/Radarr-00D4AA?style=for-the-badge&logo=radarr&logoColor=white) **Movies** | Automated movie management | [https://radarr.video](https://radarr.video) | 🟢 Active |
| ![Lidarr](https://img.shields.io/badge/Lidarr-00D4AA?style=for-the-badge&logo=lidarr&logoColor=white) **Music** | Automated music management | [https://lidarr.audio](https://lidarr.audio) | 🟢 Active |

#### 🔄 Automation & Workflows
| Component | Description | Official Website | Status |
|-----------|-------------|------------------|--------|
| ![Transcoding](https://img.shields.io/badge/Transcoding-FF6B35?style=for-the-badge&logo=video&logoColor=white) **Media Transcoding** | Hardware-accelerated encoding | [https://ffmpeg.org](https://ffmpeg.org) | 🟢 Active |
| ![Metadata](https://img.shields.io/badge/Metadata-00D4AA?style=for-the-badge&logo=metadata&logoColor=white) **Metadata Management** | Automated metadata fetching | [https://www.themoviedb.org](https://www.themoviedb.org) | 🟢 Active |

---

### 🔧 Hardening Scripts & Automation

**Security hardening and automation scripts** for infrastructure protection.

#### 🛡️ Security Hardening Scripts

```bash
# System Hardening Scripts
├── 🔒 firewall-setup.sh          # Firewall configuration
├── 🔐 ssl-certificates.sh        # SSL/TLS certificate management
├── 🛡️ security-audit.sh          # Security vulnerability scanning
├── 🔑 ssh-hardening.sh           # SSH security configuration
├── 🚪 access-control.sh          # User access management
└── 📊 monitoring-setup.sh        # Security monitoring deployment
```

#### 🤖 Automation Workflows

```yaml
# CI/CD Pipeline Configuration
security_checks:
  - name: "Vulnerability Scan"
    tool: "Trivy"
    schedule: "daily"
  
  - name: "Security Audit"
    tool: "Lynis"
    schedule: "weekly"
  
  - name: "Backup Verification"
    tool: "Custom Scripts"
    schedule: "daily"

hardening_automation:
  - name: "System Updates"
    frequency: "automatic"
    security_only: true
  
  - name: "Certificate Renewal"
    frequency: "monthly"
    auto_renew: true
  
  - name: "Access Review"
    frequency: "quarterly"
    automated: true
```

#### 📋 Security Checklist

- ✅ **Firewall Configuration**: UFW/iptables rules
- ✅ **SSL/TLS Hardening**: Modern cipher suites
- ✅ **SSH Security**: Key-based authentication only
- ✅ **User Management**: Principle of least privilege
- ✅ **Network Segmentation**: VLAN isolation
- ✅ **Monitoring**: Real-time security alerts
- ✅ **Backup Security**: Encrypted backups
- ✅ **Update Management**: Automated security patches

---

## ⚡ Performance Metrics

**Real-time performance monitoring** and system health indicators.

| Service Category | Response Time | Uptime | Load | Security Score |
|------------------|---------------|--------|------|----------------|
| **Documentation** | ![200ms](https://img.shields.io/badge/200ms-green?logo=speedtest&label=Response) | ![99.9%](https://img.shields.io/badge/99.9%25-green?logo=statuspage&label=Uptime) | ![Low](https://img.shields.io/badge/Low-green?logo=serverfault&label=Load) | ![A+](https://img.shields.io/badge/A+-green?logo=security&label=Security) |
| **Proxmox Cluster** | ![150ms](https://img.shields.io/badge/150ms-green?logo=speedtest&label=Response) | ![99.99%](https://img.shields.io/badge/99.99%25-green?logo=statuspage&label=Uptime) | ![Medium](https://img.shields.io/badge/Medium-yellow?logo=serverfault&label=Load) | ![A](https://img.shields.io/badge/A-green?logo=security&label=Security) |
| **Storage Systems** | ![5ms](https://img.shields.io/badge/5ms-green?logo=speedtest&label=Response) | ![99.999%](https://img.shields.io/badge/99.999%25-green?logo=statuspage&label=Uptime) | ![High](https://img.shields.io/badge/High-red?logo=serverfault&label=Load) | ![A+](https://img.shields.io/badge/A+-green?logo=security&label=Security) |
| **Security Services** | ![50ms](https://img.shields.io/badge/50ms-green?logo=speedtest&label=Response) | ![99.95%](https://img.shields.io/badge/99.95%25-green?logo=statuspage&label=Uptime) | ![Low](https://img.shields.io/badge/Low-green?logo=serverfault&label=Load) | ![A+](https://img.shields.io/badge/A+-green?logo=security&label=Security) |

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
