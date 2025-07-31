# Homelab Services

This directory contains Docker Compose configurations for various services running in the homelab.

## Plex Media Server

The Plex media server is configured to run as a Docker container with the following features:

### Configuration

- **Image**: `lscr.io/linuxserver/plex:latest`
- **Network**: Host mode for optimal performance
- **Volumes**: 
  - `./config` - Plex configuration and metadata
  - `./media/tv` - TV series
  - `./media/movies` - Movies
  - `./media/music` - Music
  - `./media/photos` - Photos

### Setup Instructions

1. **Get Plex Claim Token**:
   - Visit https://www.plex.tv/claim/
   - Copy your claim token
   - Add it to the `PLEX_CLAIM` environment variable

2. **Create Directory Structure**:
   ```bash
   mkdir -p config media/{tv,movies,music,photos}
   ```

3. **Set Permissions**:
   ```bash
   chown -R 1000:1000 config media
   ```

4. **Start the Service**:
   ```bash
   docker-compose -f plex-media-server.yml up -d
   ```

### Access

- **Local**: http://localhost:32400
- **Remote**: https://plex.yourdomain.com (with Traefik reverse proxy)

### Security Features

- No new privileges
- Read-only root filesystem where possible
- Temporary filesystem for cache
- Traefik integration for SSL termination

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PUID` | User ID | 1000 |
| `PGID` | Group ID | 1000 |
| `TZ` | Timezone | America/New_York |
| `PLEX_CLAIM` | Plex claim token | (required) |
| `VERSION` | Plex version | latest | 