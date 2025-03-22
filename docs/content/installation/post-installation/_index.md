---
title: "Post-Installation"
linkTitle: "Post-Installation"
weight: 1
---

# Post-Installation Guide

This guide covers the steps required after the initial installation to ensure your homelab is properly configured and ready for use.

## System Verification

### 1. Check Cluster Status
```bash
# Verify nodes are ready
kubectl get nodes

# Check all pods are running
kubectl get pods -A

# Verify system resources
kubectl top nodes
kubectl top pods -A
```

### 2. Verify Core Services
```bash
# Check service status
kubectl get svc -A

# Verify ingress
kubectl get ingress -A

# Check persistent volumes
kubectl get pv,pvc -A
```

### 3. Test Network Connectivity
```bash
# Test internal DNS
kubectl run -it --rm --restart=Never busybox --image=busybox -- nslookup kubernetes.default

# Test service access
curl -v https://your-domain.com
```

## Security Hardening

### 1. RBAC Configuration
```yaml
# Example RBAC policy
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "watch"]
```

### 2. Network Policies
```yaml
# Example network policy
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
```

### 3. Security Context
```yaml
# Example security context
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  capabilities:
    drop:
      - ALL
```

## Performance Optimization

### 1. Resource Limits
```yaml
# Example resource limits
resources:
  requests:
    memory: "64Mi"
    cpu: "250m"
  limits:
    memory: "128Mi"
    cpu: "500m"
```

### 2. Node Taints and Labels
```bash
# Add taint to node
kubectl taint nodes node1 key=value:NoSchedule

# Add label to node
kubectl label nodes node1 environment=production
```

### 3. Pod Anti-Affinity
```yaml
# Example pod anti-affinity
affinity:
  podAntiAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
    - labelSelector:
        matchExpressions:
        - key: app
          operator: In
          values:
          - myapp
      topologyKey: kubernetes.io/hostname
```

## Monitoring Setup

### 1. Prometheus Configuration
```yaml
# Example Prometheus config
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: myapp
spec:
  selector:
    matchLabels:
      app: myapp
  endpoints:
  - port: metrics
```

### 2. Grafana Dashboards
```yaml
# Example Grafana dashboard
apiVersion: integreatly.org/v1alpha1
kind: GrafanaDashboard
metadata:
  name: myapp-dashboard
spec:
  json: |
    {
      "dashboard": {
        "title": "MyApp Dashboard"
      }
    }
```

### 3. Alert Rules
```yaml
# Example alert rule
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: myapp-alerts
spec:
  groups:
  - name: myapp
    rules:
    - alert: HighCPUUsage
      expr: cpu_usage > 80
      for: 5m
```

## Backup Configuration

### 1. Velero Setup
```yaml
# Example Velero schedule
apiVersion: velero.io/v1
kind: Schedule
metadata:
  name: daily-backup
spec:
  schedule: "0 1 * * *"
  template:
    includedNamespaces:
    - default
    storageLocation: default
```

### 2. Backup Verification
```bash
# Check backup status
velero backup get

# Verify backup contents
velero backup describe daily-backup
```

### 3. Restore Testing
```bash
# Create test restore
velero restore create --from-backup daily-backup
```

## Documentation

### 1. System Documentation
- Architecture diagrams
- Network topology
- Service dependencies
- Configuration details

### 2. Operational Procedures
- Backup procedures
- Recovery procedures
- Maintenance tasks
- Troubleshooting guides

### 3. User Documentation
- Access procedures
- Service usage
- Common tasks
- Support contacts

## Maintenance Procedures

### 1. Regular Tasks
```bash
# Update system
sudo apt update && sudo apt upgrade

# Update Kubernetes
kubectl upgrade

# Clean up resources
kubectl delete pods --field-selector status.phase=Succeeded
```

### 2. Health Checks
```bash
# Check system health
kubectl get componentstatuses

# Verify storage
kubectl get pv,pvc -A

# Check logs
kubectl logs -f deployment/myapp
```

### 3. Performance Monitoring
```bash
# Monitor resource usage
kubectl top nodes
kubectl top pods -A

# Check network
kubectl exec -it myapp -- ping -c 4 kubernetes.default
```

## Troubleshooting

### Common Issues

1. **Service Access**
   ```bash
   # Check service endpoints
   kubectl get endpoints myapp
   
   # Verify ingress rules
   kubectl describe ingress myapp
   ```

2. **Storage Issues**
   ```bash
   # Check PV status
   kubectl get pv
   
   # Verify PVC
   kubectl get pvc
   ```

3. **Monitoring Problems**
   ```bash
   # Check Prometheus
   kubectl logs -f deployment/prometheus
   
   # Verify Grafana
   kubectl logs -f deployment/grafana
   ```

## Next Steps

After completing post-installation:

1. Set up [User Access](/getting-started/user-access/)
2. Configure [Development Environment](/development/)
3. Set up [CI/CD Pipeline](/development/ci-cd/)
4. Deploy [Applications](/features/applications/) 