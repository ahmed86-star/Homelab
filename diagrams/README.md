# Homelab Diagrams

This folder contains diagrams and resources for creating visual representations of the homelab infrastructure using Lucidchart and Dashboard Icons.

## Resources

### Dashboard Icons
- **Website**: [https://dashboardicons.com/](https://dashboardicons.com/)
- **Description**: A collection of 1000+ curated icons for services, applications and tools, designed specifically for dashboards and app directories
- **Usage**: Download icons and import them into Lucidchart for creating infrastructure diagrams

### Lucidchart
- **Website**: [https://www.lucidchart.com/](https://www.lucidchart.com/)
- **Features**: 
  - Professional diagramming tool
  - Import custom icons and images
  - Collaboration features
  - Export to various formats (PNG, PDF, SVG)

## How to Create Diagrams

### 1. Download Icons from Dashboard Icons
1. Visit [https://dashboardicons.com/](https://dashboardicons.com/)
2. Search for the services you need (e.g., "proxmox", "docker", "nginx", "grafana")
3. Download the icons in SVG or PNG format
4. Save them in the `icons/` subfolder

### 2. Create Diagram in Lucidchart
1. Open [Lucidchart](https://www.lucidchart.com/)
2. Create a new diagram
3. Import the downloaded icons:
   - Click "Insert" → "Image"
   - Upload the downloaded icons
   - Resize and position as needed

### 3. Diagram Types to Create
- **Infrastructure Overview**: Show all servers, VMs, and services
- **Network Topology**: Display network connections and routing
- **Service Dependencies**: Map out how services interact
- **Deployment Architecture**: Show how applications are deployed

## Folder Structure
```
diagrams/
├── README.md              # This file
├── icons/                 # Downloaded Dashboard Icons
├── templates/             # Lucidchart templates
└── exports/              # Exported diagrams (PNG, PDF)
```

## Recommended Icons for Homelab
Based on your homelab setup, consider downloading icons for:
- Proxmox VE
- Docker
- Kubernetes
- Nginx
- Grafana
- Prometheus
- InfluxDB
- Plex
- Pi-hole
- Synology
- Jenkins
- GitLab
- MinIO
- CasaOS
- Homarr

## Tips for Creating Professional Diagrams
1. **Consistent Styling**: Use the same icon style throughout
2. **Color Coding**: Use colors to distinguish different types of services
3. **Grouping**: Group related services together
4. **Labels**: Add clear labels and descriptions
5. **Legend**: Include a legend explaining symbols and colors
6. **Version Control**: Save multiple versions as you iterate

## Export and Share
- Export diagrams as PNG for web use
- Export as PDF for documentation
- Export as SVG for further editing
- Share via Lucidchart's collaboration features 