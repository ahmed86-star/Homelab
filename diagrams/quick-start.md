# Quick Start Guide: Creating Homelab Diagrams

## 🚀 Get Started in 5 Steps

### Step 1: Download Icons
1. Visit [Dashboard Icons](https://dashboardicons.com/)
2. Search for these essential icons:
   - `proxmox` - Virtualization platform
   - `docker` - Container platform
   - `grafana` - Monitoring dashboard
   - `plex` - Media server
   - `pihole` - DNS ad blocker
   - `jenkins` - CI/CD pipeline
   - `synology` - NAS system
3. Download in SVG format and save to `diagrams/icons/`

### Step 2: Create Lucidchart Account
1. Go to [Lucidchart](https://www.lucidchart.com/)
2. Sign up for free account
3. Create new diagram → "Blank Diagram"

### Step 3: Import Icons
1. In Lucidchart, click "Insert" → "Image"
2. Upload your downloaded icons
3. Resize icons to consistent size (recommend 64x64px)

### Step 4: Build Your Diagram
1. **Physical Layer** (Top): Add server icons for PVE1, PVE2, Synology
2. **Virtual Layer** (Middle): Add VM containers for each service
3. **Service Layer** (Bottom): Add application icons
4. **Connections**: Use lines to show relationships

### Step 5: Export and Share
1. Export as PNG for web use
2. Export as PDF for documentation
3. Save Lucidchart file for future editing

## 📁 Folder Structure Created
```
diagrams/
├── README.md                    # Main guide
├── icons/                       # Downloaded Dashboard Icons
│   └── README.md               # Icon organization guide
├── templates/                   # Diagram templates
│   ├── infrastructure-template.md
│   └── lucidchart-guide.md
├── exports/                     # Exported diagrams
└── quick-start.md              # This file
```

## 🎨 Recommended Color Scheme
- **Blue**: Infrastructure/Network
- **Green**: Monitoring/Logging
- **Orange**: Media/Entertainment
- **Red**: Security/Firewall
- **Purple**: Development/Tools
- **Yellow**: Storage/Backup

## 🔗 Useful Links
- [Dashboard Icons](https://dashboardicons.com/) - Icon collection
- [Lucidchart](https://www.lucidchart.com/) - Diagram tool
- [Simple Icons](https://simpleicons.org/) - Alternative icon source

## 💡 Pro Tips
1. Use SVG icons for best quality
2. Keep consistent icon sizes
3. Use grid alignment
4. Add clear labels
5. Include a legend
6. Save multiple versions

## 🎯 Next Steps
1. Download icons for your specific services
2. Create your first infrastructure diagram
3. Share with your team
4. Update diagrams as your homelab evolves

---

**Happy Diagramming! 🎉** 