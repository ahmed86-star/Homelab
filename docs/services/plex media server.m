version: "3.8"
services:
  plex:
    image: lscr.io/linuxserver/plex:latest
    container_name: plex
    network_mode: host
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/New_York
      - PLEX_CLAIM= #optional
    volumes:
      - /path/to/config:/config
      - /path/to/tvseries:/data/tvshows
      - /path/to/movies:/data/movies
    restart: unless-stopped
