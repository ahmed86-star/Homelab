# Infrastructure Diagram Template

## Overview
This template provides a structure for creating infrastructure diagrams using Lucidchart and Dashboard Icons.

## Diagram Components

### 1. Physical Infrastructure
- **Servers**: PVE1, PVE2, Synology NAS
- **Network Equipment**: Router, Switch, Access Points
- **Storage**: NAS, External Drives

### 2. Virtual Infrastructure
- **Proxmox VE Clusters**: PVE1 and PVE2
- **Virtual Machines**: Various services and applications
- **Containers**: Docker containers and services

### 3. Services Layer
- **Monitoring**: Grafana, Prometheus, InfluxDB
- **Media**: Plex Media Server
- **Security**: Pi-hole, AdGuard
- **Development**: Jenkins, GitLab, OneDev
- **Storage**: MinIO, Synology
- **Dashboard**: Homarr, CasaOS

## Recommended Icons to Download

### Infrastructure Icons
- Server/Rack icons
- Network switch/router icons
- Storage/NAS icons
- Cloud/VM icons

### Service Icons
- Proxmox VE
- Docker
- Kubernetes
- Grafana
- Prometheus
- InfluxDB
- Plex
- Pi-hole
- AdGuard
- Jenkins
- GitLab
- MinIO
- Synology
- CasaOS
- Homarr

## Diagram Layout Suggestions

### Top Level - Physical Infrastructure
```
[Internet] → [Router] → [Switch] → [PVE1, PVE2, Synology]
```

### Middle Level - Virtual Infrastructure
```
PVE1: [VM1, VM2, VM3...]
PVE2: [VM1, VM2, VM3...]
```

### Bottom Level - Services
```
Monitoring: [Grafana, Prometheus, InfluxDB]
Media: [Plex]
Security: [Pi-hole, AdGuard]
Development: [Jenkins, GitLab]
Storage: [MinIO, Synology]
```

## Color Coding Suggestions
- **Blue**: Infrastructure/Network
- **Green**: Monitoring/Logging
- **Orange**: Media/Entertainment
- **Red**: Security/Firewall
- **Purple**: Development/Tools
- **Yellow**: Storage/Backup

## Connection Types
- **Solid Line**: Direct connection
- **Dashed Line**: Virtual connection
- **Dotted Line**: Optional/Backup connection
- **Arrow**: Data flow direction

## Tips for Professional Diagrams
1. Use consistent icon sizes
2. Align elements properly
3. Use grid/snap to grid
4. Group related services
5. Add clear labels
6. Include a legend
7. Use appropriate colors
8. Keep it simple and readable 