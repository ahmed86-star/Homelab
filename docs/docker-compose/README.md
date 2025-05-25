# Homelab Docker Compose Files

This directory contains Docker Compose files for services running on two Proxmox nodes (PVE1 and PVE2).

## Directory Structure

```
docker-compose/
├── pve1/
│   ├── byte-stash.yml
│   ├── casaos.yml
│   ├── cloudflared.yml
│   ├── homarr.yml
│   ├── openwebui.yml
│   ├── pihole.yml
│   └── trillium.yml
└── pve2/
    ├── adguard.yml
    ├── cloudflared.yml
    ├── grafana.yml
    ├── influxdb.yml
    ├── jenkins.yml
    ├── minio.yml
    ├── netbox.yml
    └── tianji.yml
```

## Prerequisites

1. Docker and Docker Compose installed on both Proxmox nodes
2. A Docker network named `homelab` created on both nodes:
   ```bash
   docker network create homelab
   ```

## Environment Variables

Create a `.env` file in each service directory with the following variables:

### PVE1 Services

#### Cloudflared
```
TUNNEL_TOKEN=your_cloudflare_tunnel_token
```

#### Pi-hole
```
PIHOLE_PASSWORD=your_pihole_web_password
```

### PVE2 Services

#### Grafana
```
GRAFANA_PASSWORD=your_grafana_admin_password
```

#### InfluxDB
```
INFLUXDB_USERNAME=your_influxdb_username
INFLUXDB_PASSWORD=your_influxdb_password
INFLUXDB_ORG=your_organization_name
INFLUXDB_BUCKET=your_bucket_name
INFLUXDB_TOKEN=your_influxdb_token
```

#### MinIO
```
MINIO_ROOT_USER=your_minio_root_user
MINIO_ROOT_PASSWORD=your_minio_root_password
```

#### NetBox
```
NETBOX_DB_PASSWORD=your_netbox_db_password
NETBOX_SECRET_KEY=your_netbox_secret_key
```

## Usage

1. Navigate to the service directory:
   ```bash
   cd docs/docker-compose/pve1/byte-stash  # or any other service
   ```

2. Create the `.env` file with required variables

3. Start the service:
   ```bash
   docker compose up -d
   ```

4. Check service status:
   ```bash
   docker compose ps
   ```

5. View logs:
   ```bash
   docker compose logs -f
   ```

## Service Details

### PVE1 Services

- **Byte Stash**: File sharing and storage service
  - Port: 8080
  - Data: `./data`

- **CasaOS**: Home server OS
  - Port: 80
  - Volumes: Docker socket and CasaOS data

- **Cloudflared**: Cloudflare tunnel client
  - Requires: Cloudflare tunnel token

- **Homarr**: Dashboard for your services
  - Port: 7575
  - Volumes: Configs and icons

- **OpenWebUI**: Web interface for Ollama
  - Port: 3000
  - Requires: Ollama instance

- **Pi-hole**: DNS sinkhole
  - Ports: 53 (TCP/UDP), 80
  - Volumes: Configuration files

- **Trillium**: Note-taking application
  - Port: 8080
  - Data: `./data`

### PVE2 Services

- **AdGuard Home**: DNS ad-blocker
  - Ports: Multiple (53, 67, 68, 80, 443, etc.)
  - Volumes: Work and config directories

- **Cloudflared**: Cloudflare tunnel client
  - Requires: Cloudflare tunnel token

- **Grafana**: Metrics visualization
  - Port: 3000
  - Data: `./data`

- **InfluxDB**: Time series database
  - Port: 8086
  - Data: `./data`

- **Jenkins**: CI/CD server
  - Ports: 8080, 50000
  - Volumes: Jenkins home and Docker socket

- **MinIO**: Object storage
  - Ports: 9000 (API), 9001 (Console)
  - Data: `./data`

- **NetBox**: Network infrastructure documentation
  - Port: 8000
  - Includes: PostgreSQL and Redis
  - Volumes: Media and database data

- **Tianji**: Monitoring service
  - Port: 8080
  - Data: `./data`

## Maintenance

### Updating Services

To update a service to the latest version:

```bash
docker compose pull
docker compose up -d
```

### Backup

All services store their data in Docker volumes or local directories. Regular backups of these directories are recommended.

### Troubleshooting

1. Check service logs:
   ```bash
   docker compose logs -f
   ```

2. Verify network connectivity:
   ```bash
   docker network inspect homelab
   ```

3. Check container status:
   ```bash
   docker compose ps
   ```

## Security Notes

1. Change all default passwords
2. Keep services updated
3. Use strong passwords for all services
4. Consider using Docker secrets for sensitive data
5. Restrict access to management interfaces
6. Use reverse proxy for public-facing services 