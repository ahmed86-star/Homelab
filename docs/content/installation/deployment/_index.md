---
title: "Deployment Guide"
linkTitle: "Deployment"
weight: 1
---

# Deployment Guide

This guide covers the deployment process for the homelab infrastructure.

## Initial Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/homelab.git
   cd homelab
   ```

2. Install dependencies:
   ```bash
   sudo apt install -y make git curl wget
   ```

3. Configure environment:
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

## Infrastructure Deployment

1. Network Setup:
   ```bash
   make network-setup
   ```

2. Storage Setup:
   ```bash
   make storage-setup
   ```

3. Security Setup:
   ```bash
   make security-setup
   ```

## Kubernetes Deployment

1. Cluster Setup:
   ```bash
   make cluster-setup
   ```

2. Core Services:
   ```bash
   make core-services
   ```

3. Monitoring Stack:
   ```bash
   make monitoring-setup
   ```

## Application Deployment

1. Common Applications:
   ```bash
   make apps-deploy
   ```

2. Custom Applications:
   ```bash
   make custom-apps
   ```

## Verification

1. Check Cluster Status:
   ```bash
   kubectl get nodes
   kubectl get pods -A
   ```

2. Verify Services:
   ```bash
   make verify-services
   ```

3. Test Applications:
   ```bash
   make test-apps
   ```

## Troubleshooting

### Common Issues

1. Network Problems:
   ```bash
   make network-check
   ```

2. Storage Issues:
   ```bash
   make storage-check
   ```

3. Kubernetes Issues:
   ```bash
   make cluster-check
   ```

4. Application Issues:
   ```bash
   make apps-check
   ```

## Rollback Procedures

1. Application Rollback:
   ```bash
   make apps-rollback
   ```

2. Service Rollback:
   ```bash
   make services-rollback
   ```

3. Infrastructure Rollback:
   ```bash
   make infra-rollback
   ```

## Next Steps

After successful deployment:

1. Complete [Post-Installation Steps](/installation/post-installation/)
2. Set up [User Access](/getting-started/user-access/)
3. Configure [Backup Procedures](/how-to/data/backup-restore/)
4. Set up [Monitoring Alerts](/development/monitoring/) 