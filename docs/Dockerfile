# 🐳 Dockerfile for Homelab Documentation

# Build stage
FROM klakegg/hugo:latest AS builder

# Set working directory
WORKDIR /app

# Copy all documentation files
COPY . .

# Build the site
RUN hugo --minify

# Serve stage
FROM nginx:alpine

# Copy built site from builder
COPY --from=builder /app/public /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 