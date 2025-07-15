# 🚀 Quick Start Guide - Updated Docker Compose Files

## 📋 What's New

Your docker-compose files have been updated with modern best practices and security improvements:

### 🔒 Security Enhancements
- **Non-root containers**: All services now run as user `1000:1000`
- **Security options**: Added `no-new-privileges` flag
- **Read-only filesystems**: Temporary directories mounted as tmpfs
- **Network isolation**: Proper network segmentation
- **Secure environment variables**: Automatic password generation

### 🏥 Health Checks
- **Automatic monitoring**: All services have health check endpoints
- **Graceful degradation**: Services marked unhealthy if health checks fail
- **Startup delays**: Proper start periods for complex services

### 📊 Resource Management
- **CPU limits**: Prevent resource exhaustion
- **Memory limits**: Protect against memory leaks
- **Resource reservations**: Ensure minimum resources available

### 📝 Logging Improvements
- **Log rotation**: Automatic log file management
- **Size limits**: Prevent disk space issues
- **Structured logging**: JSON format for better parsing

### 🏷️ Traefik Integration
- **Automatic routing**: Labels for Traefik integration
- **Service discovery**: Easy reverse proxy configuration
- **SSL termination**: Ready for HTTPS setup

## 🛠️ Setup Instructions

### 1. Prerequisites
```bash
# Ensure Docker and Docker Compose are installed
docker --version
docker compose version

# Ensure you have sudo privileges
sudo whoami
```

### 2. Run the Setup Script
```bash
# Navigate to the docker-compose directory
cd docs/docker-compose

# Make the setup script executable
chmod +x setup.sh

# Run the setup script
./setup.sh
```

### 3. Configure Environment Variables
```bash
# Edit the environment file
nano /opt/homelab/.env

# Update the Cloudflare tunnel token (required for cloudflared services)
TUNNEL_TOKEN=your_actual_tunnel_token_here
```

### 4. Start Services

#### PVE1 Services (Primary Node)
```bash
# Start all PVE1 services
cd /opt/homelab/pve1
for service in */; do
    cd "$service"
    docker-compose up -d
    cd ..
done
```

#### PVE2 Services (Secondary Node)
```bash
# Start all PVE2 services
cd /opt/homelab/pve2
for service in */; do
    cd "$service"
    docker-compose up -d
    cd ..
done
```

## 📊 Service Overview

### PVE1 Services
| Service | Port | Purpose | Health Check |
|---------|------|---------|--------------|
| Byte Stash | 8080 | File sharing | `/health` |
| CasaOS | 80 | Home server OS | `/health` |
| Cloudflared | - | Secure tunnel | `tunnel info` |
| Homarr | 7575 | Service dashboard | `/health` |
| OpenWebUI | 3000 | Ollama interface | `/health` |
| Pi-hole | 53,80 | DNS sinkhole | `/admin/api.php?status` |
| Trillium | 8080 | Note-taking | `/health` |

### PVE2 Services
| Service | Port | Purpose | Health Check |
|---------|------|---------|--------------|
| AdGuard | 53,3000 | DNS ad-blocker | `/control/status` |
| Cloudflared | - | Secure tunnel | `tunnel info` |
| Grafana | 3000 | Metrics visualization | `/api/health` |
| InfluxDB | 8086 | Time series DB | `/health` |
| Jenkins | 8080 | CI/CD server | `/login` |
| MinIO | 9000,9001 | Object storage | `/minio/health/live` |
| NetBox | 8000 | Network documentation | `/health` |
| Tianji | 8080 | Monitoring | `/health` |

## 🔧 Management Commands

### Update All Services
```bash
/opt/homelab/update-services.sh
```

### Backup All Services
```bash
/opt/homelab/backup-services.sh
```

### Health Check
```bash
/opt/homelab/health-check.sh
```

### View Service Logs
```bash
# View logs for a specific service
cd /opt/homelab/pve1/pihole
docker-compose logs -f

# View logs for all services
docker-compose logs -f --tail=100
```

### Stop All Services
```bash
# Stop PVE1 services
cd /opt/homelab/pve1
for service in */; do
    cd "$service"
    docker-compose down
    cd ..
done

# Stop PVE2 services
cd /opt/homelab/pve2
for service in */; do
    cd "$service"
    docker-compose down
    cd ..
done
```

## 🔍 Monitoring

### Service Status
```bash
# Check all running containers
docker ps

# Check service health
docker-compose ps

# Check resource usage
docker stats
```

### Network Connectivity
```bash
# Test internal network
docker network inspect homelab

# Test service connectivity
docker-compose exec pihole ping grafana
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Service Won't Start
```bash
# Check logs
docker-compose logs

# Check permissions
ls -la /opt/homelab/pve1/pihole/

# Check environment variables
docker-compose config
```

#### 2. Health Check Failures
```bash
# Check if health check endpoint exists
curl -f http://localhost:8080/health

# Check container logs
docker-compose logs service-name
```

#### 3. Network Issues
```bash
# Check network configuration
docker network inspect homelab

# Test DNS resolution
docker-compose exec service-name nslookup other-service
```

#### 4. Permission Issues
```bash
# Fix permissions
sudo chown -R 1000:1000 /opt/homelab
chmod -R 755 /opt/homelab
```

## 🔒 Security Checklist

- [ ] Cloudflare tunnel token configured
- [ ] All passwords changed from defaults
- [ ] Environment file permissions set to 600
- [ ] Firewall rules configured
- [ ] SSL certificates installed (if using Traefik)
- [ ] Regular backups scheduled
- [ ] Monitoring alerts configured

## 📈 Performance Optimization

### Resource Tuning
```bash
# Adjust resource limits based on your hardware
# Edit the deploy section in docker-compose files
deploy:
  resources:
    limits:
      cpus: '2.0'    # Adjust based on CPU cores
      memory: 2G     # Adjust based on available RAM
```

### Storage Optimization
```bash
# Use SSD storage for databases
# Configure log rotation
# Regular cleanup of old images
docker system prune -f
```

## 🔄 Maintenance Schedule

| Task | Frequency | Command |
|------|-----------|---------|
| Update images | Weekly | `update-services.sh` |
| Backup data | Daily | `backup-services.sh` |
| Health check | Hourly | `health-check.sh` |
| Log cleanup | Daily | Automatic via logrotate |
| Security updates | Monthly | Manual review |

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review service logs: `docker-compose logs -f`
3. Verify environment variables: `docker-compose config`
4. Check system resources: `htop`, `df -h`
5. Test network connectivity: `ping`, `nslookup`

## 🎯 Next Steps

1. **Configure Traefik** for reverse proxy and SSL
2. **Set up monitoring** with Grafana dashboards
3. **Configure backups** to external storage
4. **Set up alerts** for service failures
5. **Document your setup** for future reference

---

**Note**: This setup follows security best practices but should be reviewed and customized for your specific environment and requirements. 