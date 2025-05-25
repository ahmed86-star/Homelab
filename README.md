# 🏠 Homelab Infrastructure Documentation

[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/ahmed86-star/Homelab/docs.yml?label=Docs%20Build&logo=github)](https://github.com/ahmed86-star/Homelab/actions)
[![Documentation](https://img.shields.io/badge/docs-ahmed1.live-blue?logo=hugo&logoColor=white)](https://ahmed1.live)
[![License](https://img.shields.io/badge/license-MIT-green.svg?logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Docker Images](https://img.shields.io/badge/docker-ready-blue?logo=docker&logoColor=white)](https://github.com/ahmed86-star/Homelab/pkgs/container/homelab)
[![Last Commit](https://img.shields.io/github/last-commit/ahmed86-star/Homelab?logo=git&logoColor=white)](https://github.com/ahmed86-star/Homelab/commits/main)
[![Open Issues](https://img.shields.io/github/issues/ahmed86-star/Homelab?logo=github&logoColor=white)](https://github.com/ahmed86-star/Homelab/issues)

Welcome to my homelab journey! This repository documents my adventures in building and maintaining a home lab environment for learning, testing, and self-hosting various services.
![photo-1558494949-ef010cbdcc31](https://github.com/user-attachments/assets/051afc2a-6f90-461a-9262-b7e57d2585a3)



## 📑 Table of Contents
- [🌟 Infrastructure Overview](#-infrastructure-overview)
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
- **Proxmox Cluster**
  - Enterprise virtualization platform
  - High Availability setup with multiple nodes
  - Resource monitoring and management
  - Container & VM support
  - ZFS storage integration

### 💾 Storage Solutions
- **Synology NAS**
  - Model: DS918+
  - Storage Configuration:
    - 4x 4TB NAS drives in SHR
    - 2x NVMe cache
    - Btrfs file system
  - Services:
    - Docker containers
    - File sharing (SMB/NFS)
    - Time Machine backups
    - Surveillance Station

### 🌐 Network Infrastructure
- **Network Equipment**
  -Network Equipment
Routers, switches and networking gear


TP-Link Archer AX20
Type: Router
Speed: AX1800 Wi-Fi 6
Ports: 4x Gigabit LAN, 1x Gigabit WAN



Netgear GS108Ev4
Type: Managed Switch
Ports: 8x Gigabit Ethernet
Features: VLAN, QoS, Link Aggregation

    - Management VLAN
    - IoT VLAN
    - Guest VLAN
    - Storage VLAN

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
