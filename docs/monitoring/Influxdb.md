# 📊 InfluxDB + Grafana | Monitor Proxmox Cluster in EASY MODE! 🚀

Welcome to the **Proxmox Home Server Series**! This guide walks you through the **easiest way to monitor your Proxmox cluster** using **InfluxDB** and **Grafana**—no Telegraf required. Perfect for your home lab or small-scale virtualization setup. 🖥️📈

---

## 🎯 Overview

This monitoring solution provides **enterprise-grade observability** for your Proxmox cluster with minimal complexity. By leveraging native Proxmox metrics collection, we eliminate the need for additional agents while maintaining comprehensive monitoring coverage.

### ✨ Key Benefits

- 🚀 **Zero Agent Overhead** - Native Proxmox metrics collection
- 📊 **Real-time Dashboards** - Beautiful Grafana visualizations
- 🔍 **Comprehensive Coverage** - CPU, Memory, Storage, Network, VM metrics
- 🛡️ **Production Ready** - Scalable and reliable architecture
- 💡 **Easy Maintenance** - Simple setup and configuration

---

## 🔧 Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Proxmox VE    │───▶│    InfluxDB     │───▶│     Grafana     │
│   (v7.x/v8.x)   │    │   (Time Series) │    │  (Dashboards)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                       │                       │
        │                       │                       │
   Metrics Push            Data Storage          Visualization
```
![image](https://github.com/user-attachments/assets/ace29d07-842d-40c0-aa7b-ff3d41a54093)


![image](https://github.com/user-attachments/assets/73b11f54-63ce-42df-ab4a-6c24b92d25ee)


---

## 📋 Requirements

### 🖥️ System Requirements

- **Proxmox VE**: v7.x or v8.x (single node or cluster)
- **Monitoring Host**: Ubuntu 20.04+ / Debian 11+ (VM or container)
- **Resources**: 
  - CPU: 2 cores minimum
  - RAM: 4GB minimum
  - Storage: 50GB+ (SSD recommended)
- **Network**: Stable connectivity between Proxmox and monitoring host

### 🔧 Prerequisites

- ✅ Root or sudo access on monitoring host
- ✅ Basic command-line proficiency
- ✅ Network access to Proxmox nodes
- ✅ Internet connectivity for package installation

---

## 🛠️ Installation Guide

### Step 1: Install InfluxDB 2.x

```bash
# Add InfluxData repository
wget -qO- https://repos.influxdata.com/influxdb.key | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/influxdb.gpg
echo "deb https://repos.influxdata.com/debian stable main" | sudo tee /etc/apt/sources.list.d/influxdb.list

# Update package list and install InfluxDB
sudo apt update && sudo apt install influxdb2

# Enable and start InfluxDB service
sudo systemctl enable --now influxdb

# Verify installation
sudo systemctl status influxdb
```

**🔗 Access InfluxDB**: Navigate to `http://<influxdb-ip>:8086`

**📝 Initial Setup**:
1. Create an **Organization** (e.g., "homelab")
2. Create a **Bucket** (e.g., "proxmox-metrics")
3. Generate an **API Token** with write permissions
4. **Save the token** - you'll need it for Proxmox configuration

### Step 2: Install Grafana

```bash
# Add Grafana repository
sudo apt install -y apt-transport-https software-properties-common
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
echo "deb https://packages.grafana.com/oss/deb stable main" | sudo tee /etc/apt/sources.list.d/grafana.list

# Install Grafana
sudo apt update && sudo apt install grafana

# Enable and start Grafana service
sudo systemctl enable --now grafana-server

# Verify installation
sudo systemctl status grafana-server
```

**🔗 Access Grafana**: Navigate to `http://<grafana-ip>:3000`

**📝 Initial Login**: 
- Username: `admin`
- Password: `admin`
- **Change password** on first login

### Step 3: Configure Proxmox Metrics Collection

#### 3.1 Edit Proxmox Configuration

```bash
# Edit the status configuration file
sudo nano /etc/pve/status.cfg
```

#### 3.2 Add InfluxDB Configuration

```ini
# InfluxDB Metrics Configuration
influxdb:
  server YOUR_INFLUXDB_IP
  port 8086
  org YOUR_ORG_NAME
  bucket YOUR_BUCKET_NAME
  token YOUR_API_TOKEN
  verify-ssl false
  max-body-size 25M
```

**🔧 Configuration Parameters**:

| Parameter | Description | Example |
|-----------|-------------|---------|
| `server` | InfluxDB server IP/hostname | `192.168.1.100` |
| `port` | InfluxDB HTTP port | `8086` |
| `org` | InfluxDB organization name | `homelab` |
| `bucket` | InfluxDB bucket name | `proxmox-metrics` |
| `token` | InfluxDB API token | `your-api-token-here` |
| `verify-ssl` | SSL verification (false for self-signed) | `false` |
| `max-body-size` | Maximum request body size | `25M` |

#### 3.3 Apply Configuration

```bash
# Restart Proxmox services to apply changes
sudo systemctl restart pveproxy
sudo systemctl restart pvedaemon

# Verify metrics are being sent
sudo journalctl -u pvedaemon -f
```

### Step 4: Configure Grafana Data Source

#### 4.1 Add InfluxDB Data Source

1. **Login to Grafana**
2. **Navigate**: Configuration → Data Sources
3. **Click**: "Add data source"
4. **Select**: "InfluxDB"
5. **Configure**:
   - **URL**: `http://YOUR_INFLUXDB_IP:8086`
   - **Access**: Server (default)
   - **Organization**: Your InfluxDB org name
   - **Token**: Your InfluxDB API token
   - **Default Bucket**: Your bucket name

#### 4.2 Test Connection

Click **"Test"** to verify the data source connection.

### Step 5: Import Proxmox Dashboards

#### 5.1 Community Dashboards

**Recommended Dashboard IDs**:
- `1860` - Proxmox VE Cluster Overview
- `1443` - Proxmox VE Node Overview
- `1957` - Proxmox VE VM Overview

#### 5.2 Import Process

1. **Navigate**: Dashboards → Import
2. **Enter Dashboard ID**: `1860`
3. **Select Data Source**: Your InfluxDB data source
4. **Click**: Import

#### 5.3 Custom Dashboard Configuration

```json
{
  "dashboard": {
    "title": "Proxmox Cluster Overview",
    "tags": ["proxmox", "homelab"],
    "timezone": "browser",
    "refresh": "30s"
  }
}
```

---

## 📊 Metrics Overview

### 🖥️ System Metrics

| Metric Category | Description | Collection Frequency |
|-----------------|-------------|---------------------|
| **CPU Usage** | Per-core and overall CPU utilization | 30s |
| **Memory Usage** | RAM usage, swap, and memory pressure | 30s |
| **Storage I/O** | Disk read/write operations and latency | 30s |
| **Network I/O** | Network throughput and packet statistics | 30s |
| **Temperature** | CPU and system temperatures | 60s |

### 🐳 Virtual Machine Metrics

| Metric Type | Description | Availability |
|-------------|-------------|--------------|
| **CPU Usage** | Per-VM CPU utilization | Real-time |
| **Memory Usage** | VM memory consumption | Real-time |
| **Disk I/O** | VM storage performance | Real-time |
| **Network I/O** | VM network traffic | Real-time |
| **Status** | VM power state and health | Real-time |

### 🗄️ Storage Metrics

| Storage Type | Metrics Collected |
|--------------|-------------------|
| **Local Storage** | Usage, I/O, latency |
| **NFS/CIFS** | Mount status, performance |
| **ZFS** | Pool health, compression ratio |
| **LVM** | Volume usage, I/O statistics |

---

## 🔍 Troubleshooting

### Common Issues

#### 1. Metrics Not Appearing in Grafana

```bash
# Check InfluxDB connectivity
curl -H "Authorization: Token YOUR_TOKEN" \
     "http://YOUR_INFLUXDB_IP:8086/api/v2/buckets?org=YOUR_ORG"

# Verify Proxmox configuration
sudo cat /etc/pve/status.cfg

# Check Proxmox logs
sudo journalctl -u pvedaemon -n 50
```

#### 2. InfluxDB Connection Issues

```bash
# Test InfluxDB service
sudo systemctl status influxdb

# Check InfluxDB logs
sudo journalctl -u influxdb -f

# Verify port accessibility
sudo netstat -tlnp | grep 8086
```

#### 3. Grafana Data Source Problems

```bash
# Test Grafana service
sudo systemctl status grafana-server

# Check Grafana logs
sudo journalctl -u grafana-server -f

# Verify data source configuration
curl -H "Authorization: Bearer YOUR_GRAFANA_TOKEN" \
     "http://YOUR_GRAFANA_IP:3000/api/datasources"
```

### Performance Optimization

#### 1. InfluxDB Tuning

```bash
# Edit InfluxDB configuration
sudo nano /etc/influxdb/config.yml

# Recommended settings for homelab
[data]
  max-concurrent-compactions = 2
  max-series-per-database = 1000000
  max-values-per-tag = 100000
```
![image](https://github.com/user-attachments/assets/286e6f71-6baf-4b0f-9842-6bd6ba09d36a)


#### 2. Data Retention

```bash
# Set retention policy (30 days for homelab)
influx bucket update --name proxmox-metrics --retention 30d
```
![image](https://github.com/user-attachments/assets/55633fe2-c9a2-453e-ae76-bec3dba2f6cc)

#### 3. Resource Limits

```bash
# Monitor resource usage
docker stats influxdb grafana

# Adjust container limits if needed
docker update --memory 2g --cpus 1 influxdb
```

---

## 🔒 Security Considerations

### Network Security

```bash
# Configure firewall rules
sudo ufw allow from PROXMOX_IP to any port 8086
sudo ufw allow from PROXMOX_IP to any port 3000

# Use reverse proxy for external access
sudo apt install nginx
```

### Authentication

```bash
# Enable Grafana authentication
# Edit /etc/grafana/grafana.ini
[auth.anonymous]
enabled = false

[auth.basic]
enabled = true
```

### Data Encryption

```bash
# Enable TLS for InfluxDB
# Edit /etc/influxdb/config.yml
[http]
  https-enabled = true
  https-certificate = "/path/to/cert.pem"
  https-private-key = "/path/to/key.pem"
```

---

## 📈 Advanced Features

### Custom Dashboards

#### 1. Create Custom Queries

```sql
-- CPU usage by node
from(bucket: "proxmox-metrics")
  |> range(start: -1h)
  |> filter(fn: (r) => r._measurement == "cpu")
  |> filter(fn: (r) => r._field == "usage")
  |> aggregateWindow(every: 1m, fn: mean)
```

#### 2. Alert Rules

```yaml
# Grafana Alert Rule Example
apiVersion: 1
groups:
  - name: Proxmox Alerts
    rules:
      - alert: HighCPUUsage
        expr: cpu_usage > 80
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: High CPU usage detected
```



#### 1. Backup Procedures

```bash
# Backup InfluxDB data
influx backup /backup/influxdb --bucket proxmox-metrics

# Backup Grafana configuration
sudo tar -czf grafana-backup.tar.gz /etc/grafana/
```
![image](https://github.com/user-attachments/assets/9ea16c84-add4-4c6f-97f9-2680716fc890)



#### 2. Update Procedures

```bash
# Update InfluxDB
sudo apt update && sudo apt upgrade influxdb2

# Update Grafana
sudo apt update && sudo apt upgrade grafana
```

#### 3. Health Checks

```bash
# Create health check script
#!/bin/bash
# Check InfluxDB
curl -f http://localhost:8086/health || echo "InfluxDB down"

# Check Grafana
curl -f http://localhost:3000/api/health || echo "Grafana down"
```

### Monitoring the Monitor

#### 1. Self-Monitoring Dashboard

Create a dashboard to monitor the monitoring stack itself:
- InfluxDB performance metrics
- Grafana response times
- Disk usage for time-series data
- Network connectivity status


![image](https://github.com/user-attachments/assets/783e7161-a4e9-4891-82e6-cf6743cd3c3b)



#### 2. Log Aggregation

```bash
# Configure log forwarding
sudo journalctl -u influxdb -f | logger -t influxdb
sudo journalctl -u grafana-server -f | logger -t grafana
```
![image](https://github.com/user-attachments/assets/c821a94c-a4d7-4cca-bc2a-c74f2d158420)

---

## 📚 References

### Official Documentation

- 📖 [Proxmox VE Documentation](https://pve.proxmox.com/wiki/Main_Page)
- 📖 [InfluxDB Documentation](https://docs.influxdata.com/)
- 📖 [Grafana Documentation](https://grafana.com/docs/)

### Community Resources

- 🎯 [Proxmox Community Forums](https://forum.proxmox.com/)
- 🎯 [Grafana Community Dashboards](https://grafana.com/grafana/dashboards/)
- 🎯 [InfluxDB Community](https://community.influxdata.com/)

### Related Guides

- 🔗 [Proxmox Backup Strategies](./../backup/)
- 🔗 [Network Configuration](./../networking/)
- 🔗 [Security Hardening](./../security/)

---

## 🤝 Contributing

Found an issue or have a suggestion? Please:

1. **Check existing issues** in the repository
2. **Create a new issue** with detailed information
3. **Submit a pull request** with your improvements

### Development Setup

```bash
# Clone the repository
git clone https://github.com/your-username/homelab.git

# Create feature branch
git checkout -b feature/monitoring-improvements

# Make changes and submit PR
git add .
git commit -m "Add monitoring improvements"
git push origin feature/monitoring-improvements
```

---

## 📄 License

This documentation is licensed under the [MIT License](../LICENSE).

