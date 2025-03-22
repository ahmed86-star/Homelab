#  My Awesome Homelab Setup


# �� My Awesome Homelab Journey (Est. November 2024)

Welcome to my homelab adventure! This repository documents my journey in building and maintaining a home lab environment for learning, testing, and self-hosting various services.

## 🌟 Quick Overview
- 🎯 Started: November 2024
- 🏗️ Status: Active Development
- 🔄 Last Updated: March 2025

## 📑 Table of Contents
- [🌐 Network Infrastructure](#-network-infrastructure)
- [🖥️ Compute Resources](#️-compute-resources)
- [📊 Power & Costs](#-power--costs)
- [📈 Progress Timeline](#-progress-timeline)
- [🎯 Current Projects](#-current-projects)
- [🔮 Future Plans](#-future-plans)

## 🌐 Network Infrastructure

### Core Components
- 📡 **Router**: TP-Link Archer AX20
- ![tp-link-archer-ax21-router-3](https://github.com/user-attachments/assets/44a1f4f4-bc81-41dd-8ec4-ad66fb7d1b4e)

  - Wi-Fi 6 (AX1800)
  - Dual-band: 2.4GHz + 5GHz
  - 4x Gigabit LAN ports
  - MU-MIMO support
  - Advanced QoS features

- 🔌 **Switch**: Netgear GS108Ev4
- ![Screenshot 2025-03-09 222911](https://github.com/user-attachments/assets/990c55d5-b3a9-41e2-875e-f8470c280bc2)

  - 8-Port Gigabit Managed
  - VLAN support
  - Link aggregation
  - QoS capabilities
  - Energy-efficient design

### Network Design
- 🔀 VLANs (Planned):
  - VLAN 10: Management
  - VLAN 20: Servers
  - VLAN 30: IoT Devices
  - VLAN 40: Guest Network

## 🖥️ Compute Resources

### Primary Virtualization Cluster
- 🖥️ **Proxmox Host 1** (Active)
  - Hardware: Dell OptiPlex 7040 SFF
  - CPU: Intel i5-6500 (4C/4T)
  - RAM: 32GB DDR4
  - Storage:
    - 1TB NVMe (OS & VMs)
    - 2TB HDD (Bulk Storage)
  - Role: Primary virtualization host

- 🖥️ **Proxmox Host 2** (Planned Q2 2025)
  - Hardware: Dell OptiPlex 7040 SFF
  - Specs: Will mirror Host 1
  - Purpose: High-availability cluster

### Storage Solution
- 💾 **NAS: Synology DS918+**
  - Configuration: 4-Bay (Currently 8TB)
  - Planned Storage: 4x 4TB NAS drives
  - Features:
    - Hardware transcoding
    - Docker support
    - Snapshot replication
    - Cloud sync capabilities

### Legacy Systems
- 🏛️ **HP Compaq 8200 Elite SFF**
  - Role: Testing & Development
  - Use cases:
    - Software testing
    - Backup device
    - Development environment

## 🏗️ Physical Infrastructure

### Rack Setup
- 🗄️ **VEVOR 6U Wall Mount Cabinet**
  - Dimensions: 15.5" Deep
  - Security: Lockable front door
  - Features:
    - Mesh ventilation
    - Cable management
    - Wall-mountable design

### Current Layout
1. 1U - Patch Panel (Planned)
2. 2U - Proxmox Host 1
3. 2U - Synology NAS
4. 1U - Cable Management


## 📈 Progress Timeline

### ✅ Completed (Nov 2024 - Mar 2025)
- 🎯 Initial network setup
- 🖥️ Proxmox Host 1 deployment
- 🌐 UniFi Controller installation
- 📡 Wi-Fi optimization

### 🔄 In Progress (Q2 2025)
- 💾 NAS drive configuration
- 🔌 Cable management overhaul
- ⚡ UPS implementation

### 🎯 Current Projects
1. **High Availability Cluster**
   - Status: Planning
   - Timeline: Q2 2025
   - Components: 2x Proxmox hosts

2. **Backup Infrastructure**
   - Status: In Progress
   - Timeline: Q2 2025
   - Storage: 16TB Raw

3. **Network Segmentation**
   - Status: Planning
   - Timeline: Q3 2025
   - Focus: VLAN implementation

## 🔮 Future Plans

### Short-term (Q2-Q3 2025)
- 🔹 1U Cable Management Panel
- 🔹 Rack-mounted Fans
- 🔹 1U PDU Installation
- 🔹 UPS Integration

### Long-term (Q4 2025+)
- 🔹 10Gb Network Backbone
- 🔹 Additional Storage Node
- 🔹 Kubernetes Cluster
- 🔹 Home Automation Server

## 📚 Documentation
- [Network Setup](./docs/networking.md)
- [Server Configuration](./docs/servers.md)
- [Infrastructure Details](./docs/infrastructure.md)
- [Power Analysis](./docs/power-consumption.md)

## 🛠️ Automation
- [Setup Scripts](./Scripts/)
- [Monitoring Tools](./Scripts/monitoring-setup.sh)
- [Backup Solutions](./Scripts/backup-setup.sh)

## 📸 Gallery
Check out the [images](./images) directory for photos and diagrams of the setup.

---
*Last updated: March 2025* 
