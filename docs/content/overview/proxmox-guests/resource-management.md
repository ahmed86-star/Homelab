---
title: "Resource Management"
linkTitle: "Resource Management"
weight: 2
---

# 🔧 Resource Management Guide

This guide provides detailed information about managing resources for LXC guests in our Proxmox environment.

## 📊 Resource Allocation

### CPU Management

#### Current CPU Usage
```bash
# View CPU usage per container
pct monitor 101

# Check CPU limits
pct config 101 | grep cores
```

#### Recommended CPU Limits
| Container | ID | Recommended Cores | Notes |
|-----------|----|------------------|-------|
| CasaOS | 101 | 2 | High CPU usage for container management |
| Homarr | 105 | 1 | Moderate CPU usage for dashboard |
| Cloudflared | 100 | 1 | High CPU usage for tunnel processing |
| Pi-hole | 104 | 1 | Moderate CPU usage for DNS |
| Proxmox Datacenter Manager | 103 | 2 | High CPU usage for monitoring |
| ByteStash | 106 | 1 | Moderate CPU usage for storage |
| Apache CouchDB | 102 | 2 | High CPU usage for database operations |
| Jenkins | 104 | 2 | High CPU usage for builds |
| AdGuard | 101 | 1 | Moderate CPU usage for DNS |

#### Setting CPU Limits
```bash
# Set CPU cores
pct set 101 -cores 2

# Set CPU units (relative weight)
pct set 101 -cpuunits 1024

# Enable CPU hotplug
pct set 101 -features cpu_hotplug=1
```

### Memory Management

#### Current Memory Usage
```bash
# View memory usage
pct monitor 101

# Check memory limits
pct config 101 | grep memory
```

#### Recommended Memory Limits
| Container | ID | Recommended RAM | Notes |
|-----------|----|-----------------|-------|
| CasaOS | 101 | 2048MB | High memory usage for management |
| Homarr | 105 | 1024MB | Moderate memory usage |
| Cloudflared | 100 | 512MB | Low memory usage |
| Pi-hole | 104 | 1024MB | Moderate memory usage |
| Proxmox Datacenter Manager | 103 | 2048MB | High memory usage |
| ByteStash | 106 | 2048MB | High memory usage for storage |
| Apache CouchDB | 102 | 4096MB | High memory usage for database |
| Jenkins | 104 | 4096MB | High memory usage for builds |
| AdGuard | 101 | 1024MB | Moderate memory usage |

#### Setting Memory Limits
```bash
# Set memory limit
pct set 101 -memory 2048

# Enable swap
pct set 101 -swap 1024

# Set memory ballooning
pct set 101 -balloon 1
```

### Storage Management

#### Current Storage Usage
```bash
# View storage usage
pct exec 101 df -h

# Check storage limits
pct config 101 | grep rootfs
```

#### Recommended Storage Limits
| Container | ID | Recommended Storage | Notes |
|-----------|----|---------------------|-------|
| CasaOS | 101 | 20GB | High storage for logs |
| Homarr | 105 | 10GB | Moderate storage |
| Cloudflared | 100 | 5GB | Low storage |
| Pi-hole | 104 | 10GB | Moderate storage for logs |
| Proxmox Datacenter Manager | 103 | 20GB | High storage for monitoring |
| ByteStash | 106 | 50GB | High storage for data |
| Apache CouchDB | 102 | 30GB | High storage for database |
| Jenkins | 104 | 40GB | High storage for builds |
| AdGuard | 101 | 10GB | Moderate storage |

#### Storage Operations
```bash
# Resize storage
pct resize 101 rootfs 20G

# Add storage device
pct set 101 -mp0 /mnt/storage,mp=/data

# Check storage performance
pct exec 101 iostat -x 1
```

## 📈 Performance Monitoring

### Real-time Monitoring
```bash
# Monitor container resources
pct monitor 101

# View container statistics
pct status 101

# Check container logs
pct enter 101
journalctl -f
```

### Historical Data
```bash
# View historical CPU usage
rrdtool info /var/lib/rrdcached/db/pve2-storage.rrd

# Check historical memory usage
rrdtool fetch /var/lib/rrdcached/db/pve2-storage.rrd AVERAGE

# View historical network usage
rrdtool fetch /var/lib/rrdcached/db/pve2-storage.rrd AVERAGE
```

### Alert Configuration
```bash
# Set up resource alerts
pct set 101 -features nesting=1,keyctl=1

# Configure monitoring thresholds
pct config 101
```

## 🔄 Resource Optimization

### CPU Optimization
```bash
# Set CPU affinity
pct set 101 -cores 2,cores=0-1

# Enable CPU hotplug
pct set 101 -features cpu_hotplug=1

# Set CPU units
pct set 101 -cpuunits 1024
```

### Memory Optimization
```bash
# Enable memory ballooning
pct set 101 -balloon 1

# Set swap limits
pct set 101 -swap 1024

# Configure memory limits
pct set 101 -memory 2048
```

### Storage Optimization
```bash
# Enable discard
pct set 101 -features discard=1

# Configure storage limits
pct resize 101 rootfs 20G

# Set storage performance
pct set 101 -mp0 /mnt/storage,mp=/data,backup=0
```

## 🛠️ Maintenance Procedures

### Regular Checks
```bash
# Daily resource check
pct monitor 101

# Weekly storage check
pct exec 101 df -h

# Monthly performance review
pct status 101
```

### Resource Cleanup
```bash
# Clean up unused resources
pct exec 101 apt clean

# Remove old logs
pct exec 101 journalctl --vacuum-time=7d

# Clear temporary files
pct exec 101 rm -rf /tmp/*
```

## 🔍 Troubleshooting

### High CPU Usage
```bash
# Check process usage
pct enter 101
top

# Monitor specific processes
pct exec 101 ps aux | grep high_cpu_process

# Adjust CPU limits
pct set 101 -cores 2
```

### Memory Issues
```bash
# Check memory usage
pct exec 101 free -h

# Monitor swap usage
pct exec 101 swapon --show

# Adjust memory limits
pct set 101 -memory 2048
```

### Storage Problems
```bash
# Check disk space
pct exec 101 df -h

# Monitor disk I/O
pct exec 101 iostat -x 1

# Resize storage
pct resize 101 rootfs 20G
```

## 📝 Best Practices

1. **Resource Allocation**
   - Start with conservative limits
   - Monitor usage patterns
   - Adjust based on actual needs

2. **Performance Monitoring**
   - Set up regular monitoring
   - Configure alerts
   - Review historical data

3. **Maintenance**
   - Regular resource cleanup
   - Periodic performance review
   - Proactive optimization

4. **Troubleshooting**
   - Monitor resource usage
   - Check logs regularly
   - Maintain documentation 