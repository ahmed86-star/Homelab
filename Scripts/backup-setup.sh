#!/bin/bash

# Backup Setup Script

#!/bin/bash

# 💾 Backup System Setup Script
# Sets up an automated backup system using restic

echo "🚀 Starting Backup System Setup..."

# Install Dependencies
echo "📦 Installing dependencies..."
apt update && apt upgrade -y
apt install -y \
    restic \
    cron \
    curl

# Create Backup Directories
echo "📁 Creating backup directories..."
mkdir -p /opt/backup/scripts
mkdir -p /opt/backup/logs
mkdir -p /opt/backup/repo

# Create Backup Configuration
echo "⚙️ Creating backup configuration..."
cat > /opt/backup/scripts/backup-config.sh << 'EOF'
#!/bin/bash

# Backup repository password
export RESTIC_PASSWORD="your-secure-password-here"

# Backup paths
BACKUP_PATHS="/etc /home /var/www /opt/monitoring"

# Backup repository
BACKUP_REPO="/opt/backup/repo"

# Initialize repository if it doesn't exist
if [ ! -d "$BACKUP_REPO" ]; then
    restic init --repo "$BACKUP_REPO"
fi

# Perform backup
restic -r "$BACKUP_REPO" backup $BACKUP_PATHS

# Keep only last 7 daily, 4 weekly, and 3 monthly backups
restic -r "$BACKUP_REPO" forget \
    --keep-daily 7 \
    --keep-weekly 4 \
    --keep-monthly 3 \
    --prune
EOF
chmod +x /opt/backup/scripts/backup-config.sh

# Setup Automated Backups
echo "⏰ Setting up automated backups..."
(crontab -l 2>/dev/null; echo "0 2 * * * /opt/backup/scripts/backup-config.sh > /opt/backup/logs/backup-\$(date +\%Y\%m\%d).log 2>&1") | crontab -

# Create Backup Check Script
echo "🔍 Creating backup check script..."
cat > /usr/local/bin/checkbackup << 'EOF'
#!/bin/bash
export RESTIC_PASSWORD="your-secure-password-here"
BACKUP_REPO="/opt/backup/repo"

echo "💾 Backup Status Check"
echo "-------------------"
echo "📊 Repository Statistics:"
restic -r "$BACKUP_REPO" stats

echo -e "\n📅 Latest Snapshots:"
restic -r "$BACKUP_REPO" snapshots --last 5
EOF
chmod +x /usr/local/bin/checkbackup

echo "✅ Backup system setup completed!"
echo "🔄 Daily backups scheduled for 2 AM"
echo "🔍 Run 'checkbackup' to verify backup status"
echo "⚠️ Important: Update the backup password in the scripts!"
