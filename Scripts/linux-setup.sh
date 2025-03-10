#!/bin/bash

# Linux Setup Script
#!/bin/bash

# 🐧 Linux Server Setup Script for Homelab
# This script sets up a basic Linux server with common tools and security configurations

echo "🚀 Starting Linux Server Setup..."

# System Update
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Essential Tools
echo "🛠️ Installing essential tools..."
apt install -y \
    curl \
    wget \
    git \
    vim \
    htop \
    iftop \
    iotop \
    net-tools \
    nmap \
    tmux \
    tree \
    unzip \
    zip \
    fail2ban \
    ufw \
    python3 \
    python3-pip \
    docker.io \
    docker-compose

# Setup Docker
echo "🐳 Setting up Docker..."
systemctl enable docker
systemctl start docker
usermod -aG docker $USER

# Configure Firewall
echo "🔒 Setting up UFW firewall..."
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# Setup Fail2ban
echo "🛡️ Configuring Fail2ban..."
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
systemctl enable fail2ban
systemctl start fail2ban

# Security Hardening
echo "🔐 Implementing security measures..."

# SSH Hardening
echo "📡 Hardening SSH configuration..."
sed -i 's/#PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
systemctl restart sshd

# System Hardening
echo "💪 Hardening system configuration..."
# Set up automatic security updates
apt install -y unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades

# Setup Monitoring Tools
echo "📊 Setting up monitoring tools..."
apt install -y \
    prometheus-node-exporter \
    collectd

# Create Maintenance Scripts
echo "🔧 Creating maintenance scripts..."

# Create update script
cat > /usr/local/bin/update-system << 'EOF'
#!/bin/bash
apt update
apt upgrade -y
apt autoremove -y
apt clean
EOF
chmod +x /usr/local/bin/update-system

# Create backup script
cat > /usr/local/bin/backup-config << 'EOF'
#!/bin/bash
BACKUP_DIR="/opt/backups/$(date +%Y%m%d)"
mkdir -p $BACKUP_DIR
cp -r /etc $BACKUP_DIR/
find /opt/backups -type d -mtime +7 -exec rm -rf {} \;
EOF
chmod +x /usr/local/bin/backup-config

# Setup Cron Jobs
echo "⏰ Setting up cron jobs..."
(crontab -l 2>/dev/null; echo "0 3 * * * /usr/local/bin/update-system") | crontab -
(crontab -l 2>/dev/null; echo "0 4 * * * /usr/local/bin/backup-config") | crontab -

# Create System Info Script
echo "ℹ️ Creating system info script..."
cat > /usr/local/bin/sysinfo << 'EOF'
#!/bin/bash
echo "🖥️ System Information"
echo "-------------------"
echo "📅 Date: $(date)"
echo "🏠 Hostname: $(hostname)"
echo "💻 CPU Usage: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}')%"
echo "🧠 Memory Usage: $(free -m | awk '/Mem:/ {print $3}')MB / $(free -m | awk '/Mem:/ {print $2}')MB"
echo "💾 Disk Usage: $(df -h / | awk '/\// {print $5}')"
echo "🌐 IP Address: $(hostname -I | awk '{print $1}')"
EOF
chmod +x /usr/local/bin/sysinfo

echo "✅ Linux server setup completed!"
echo "🔍 Run 'sysinfo' to check system status"
echo "🔄 Daily updates scheduled for 3 AM"
echo "💾 Daily backups scheduled for 4 AM"
