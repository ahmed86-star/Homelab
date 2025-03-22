#!/bin/bash

# Monitoring Setup Script
#!/bin/bash

# 📊 Monitoring Stack Setup Script
# Sets up Prometheus, Grafana, and Node Exporter for system monitoring

echo "🚀 Starting Monitoring Stack Setup..."

# Install Dependencies
echo "📦 Installing dependencies..."
apt update && apt upgrade -y
apt install -y \
    docker.io \
    docker-compose \
    git

# Create Monitoring Directory
echo "📁 Creating monitoring directory..."
mkdir -p /opt/monitoring
cd /opt/monitoring

# Create Docker Compose File
echo "🐳 Creating Docker Compose configuration..."
cat > docker-compose.yml << 'EOF'
version: '3'

services:
  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus:/etc/prometheus
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/usr/share/prometheus/console_libraries'
      - '--web.console.templates=/usr/share/prometheus/consoles'
    restart: unless-stopped

  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    ports:
      - "3000:3000"
    volumes:
      - grafana_data:/var/lib/grafana
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=homelab123
    restart: unless-stopped

  node-exporter:
    image: prom/node-exporter:latest
    container_name: node-exporter
    ports:
      - "9100:9100"
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.sysfs=/host/sys'
      - '--collector.filesystem.ignored-mount-points=^/(sys|proc|dev|host|etc)($$|/)'
    restart: unless-stopped

volumes:
  prometheus_data:
  grafana_data:
EOF

# Create Prometheus Configuration
echo "⚙️ Creating Prometheus configuration..."
mkdir -p prometheus
cat > prometheus/prometheus.yml << 'EOF'
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']
EOF

# Start Monitoring Stack
echo "▶️ Starting monitoring stack..."
docker-compose up -d

# Create Monitoring Info Script
echo "ℹ️ Creating monitoring info script..."
cat > /usr/local/bin/monitoringinfo << 'EOF'
#!/bin/bash
echo "📊 Monitoring Stack Information"
echo "----------------------------"
echo "🔍 Checking service status..."
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep -E 'prometheus|grafana|node-exporter'
echo
echo "🌐 Access URLs:"
echo "Grafana: http://$(hostname -I | awk '{print $1}'):3000"
echo "Prometheus: http://$(hostname -I | awk '{print $1}'):9090"
echo "Node Exporter: http://$(hostname -I | awk '{print $1}'):9100"
echo
echo "🔑 Default Grafana credentials:"
echo "Username: admin"
echo "Password: homelab123"
EOF
chmod +x /usr/local/bin/monitoringinfo

echo "✅ Monitoring stack setup completed!"
echo "🔍 Run 'monitoringinfo' to get access information"
echo "📊 Access Grafana at http://localhost:3000"
echo "🔑 Default Grafana credentials: admin/homelab123"
