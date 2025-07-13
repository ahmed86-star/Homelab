---
title: "Development Environment"
linkTitle: "Development"
weight: 1
description: "Comprehensive guide to our development environment, tools, workflows, and best practices"
date: 2024-01-15
lastmod: 2024-01-15
draft: false
tags: ["development", "tools", "workflow", "docker", "kubernetes", "testing"]
categories: ["development"]
author: "Homelab Team"
---

# 🛠️ Development Environment

This guide provides comprehensive information about our development environment, tools, workflows, and best practices for building and deploying applications in our homelab infrastructure.

## 📋 Table of Contents

- [Overview](#overview)
- [Environment Setup](#environment-setup)
- [Tools & Technologies](#tools--technologies)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Container Development](#container-development)
- [Testing Strategy](#testing-strategy)
- [Debugging](#debugging)
- [Security](#security)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)

## 🎯 Overview

Our development environment is designed to provide a consistent, efficient, and secure platform for building, testing, and deploying applications across our homelab infrastructure.

### Key Features
- **Containerized Development**: Docker-based development environment
- **Kubernetes Integration**: Local and remote cluster development
- **Automated Testing**: Comprehensive test suites and CI/CD integration
- **Security First**: Built-in security scanning and best practices
- **Performance Optimization**: Tools and techniques for optimal performance

### Development Statistics
- **Build Success Rate**: 99.2%
- **Average Build Time**: 3.5 minutes
- **Test Coverage**: 87%
- **Deployment Frequency**: 5-8 times per day

## 🖥️ Environment Setup

### System Requirements
```yaml
# Minimum requirements
minimum_requirements:
  cpu: "4 cores"
  memory: "8GB RAM"
  storage: "50GB free space"
  network: "100Mbps connection"

# Recommended requirements
recommended_requirements:
  cpu: "8+ cores"
  memory: "16GB+ RAM"
  storage: "100GB+ free space"
  network: "1Gbps connection"
```

### Required Tools Installation
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install essential tools
sudo apt install -y \
  git \
  curl \
  wget \
  make \
  build-essential \
  software-properties-common \
  apt-transport-https \
  ca-certificates \
  gnupg \
  lsb-release

# Install Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Install Helm
curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | sudo tee /usr/share/keyrings/helm.gpg > /dev/null
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt update
sudo apt install -y helm

# Install k3d for local development
curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash

# Install development languages
sudo apt install -y python3 python3-pip nodejs npm golang-go

# Install VS Code
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install -y code
```

### VS Code Extensions
```json
{
  "recommendations": [
    "ms-kubernetes-tools.vscode-kubernetes-tools",
    "ms-azuretools.vscode-docker",
    "ms-vscode.vscode-json",
    "ms-python.python",
    "ms-vscode.vscode-typescript-next",
    "golang.go",
    "redhat.vscode-yaml",
    "ms-vscode.vscode-markdown",
    "eamodio.gitlens",
    "ms-vscode.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-jest"
  ]
}
```

## 🛠️ Tools & Technologies

### Core Development Stack
```yaml
# Development stack
development_stack:
  version_control:
    - git: "^2.40.0"
    - github_cli: "^2.30.0"
  
  containerization:
    - docker: "^24.0.0"
    - docker_compose: "^2.20.0"
    - buildx: "^0.11.0"
  
  orchestration:
    - kubectl: "^1.28.0"
    - helm: "^3.12.0"
    - k3d: "^5.5.0"
  
  languages:
    - python: "^3.11.0"
    - nodejs: "^18.0.0"
    - golang: "^1.21.0"
  
  testing:
    - pytest: "^7.4.0"
    - jest: "^29.6.0"
    - cypress: "^13.0.0"
```

### Development Tools Configuration
```yaml
# Tool configurations
tool_configurations:
  git:
    user_name: "Your Name"
    user_email: "your.email@domain.com"
    default_branch: "main"
    editor: "code --wait"
  
  docker:
    buildkit: true
    experimental: true
    registry_mirrors:
      - "https://mirror.gcr.io"
  
  kubectl:
    context: "homelab-cluster"
    namespace: "default"
  
  helm:
    registry: "ghcr.io"
    repository: "your-org"
```

## 📁 Project Structure

### Repository Organization
```
homelab/
├── apps/                          # Application definitions
│   ├── web-app/                   # Web application
│   ├── api-service/               # API service
│   └── worker/                    # Background worker
├── infrastructure/                # Infrastructure code
│   ├── kubernetes/                # K8s manifests
│   ├── terraform/                 # Terraform configs
│   └── ansible/                   # Ansible playbooks
├── scripts/                       # Utility scripts
│   ├── setup/                     # Setup scripts
│   ├── deployment/                # Deployment scripts
│   └── maintenance/               # Maintenance scripts
├── docs/                          # Documentation
│   ├── api/                       # API documentation
│   ├── architecture/              # Architecture docs
│   └── guides/                    # User guides
├── tests/                         # Test files
│   ├── unit/                      # Unit tests
│   ├── integration/               # Integration tests
│   └── e2e/                       # End-to-end tests
├── docker-compose/                # Docker Compose files
│   ├── development/               # Development environment
│   ├── staging/                   # Staging environment
│   └── production/                # Production environment
├── .github/                       # GitHub workflows
├── .vscode/                       # VS Code settings
├── Makefile                       # Build automation
├── docker-compose.yml             # Main compose file
├── .env.example                   # Environment template
├── .gitignore                     # Git ignore rules
└── README.md                      # Project documentation
```

### Configuration Files
```yaml
# Configuration structure
configuration_files:
  docker:
    - "Dockerfile"                 # Container definition
    - "docker-compose.yml"         # Service orchestration
    - ".dockerignore"              # Docker ignore rules
  
  kubernetes:
    - "deployment.yaml"            # Application deployment
    - "service.yaml"               # Service definition
    - "ingress.yaml"               # Ingress configuration
    - "configmap.yaml"             # Configuration data
    - "secret.yaml"                # Secret data
  
  development:
    - ".env"                       # Environment variables
    - ".env.local"                 # Local environment
    - "package.json"               # Node.js dependencies
    - "requirements.txt"           # Python dependencies
    - "go.mod"                     # Go modules
```

## 🔄 Development Workflow

### Git Workflow
```bash
# Branch strategy
main_branch: "main"
development_branch: "develop"
feature_prefix: "feature/"
hotfix_prefix: "hotfix/"
release_prefix: "release/"

# Workflow commands
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
git checkout develop
git merge feature/new-feature
git push origin develop
```

### Code Review Process
```yaml
# Code review workflow
code_review:
  steps:
    - name: "Create pull request"
      description: "Create PR from feature branch to develop"
    
    - name: "Automated checks"
      description: "Run linting, tests, and security scans"
    
    - name: "Code review"
      description: "Peer review of code changes"
    
    - name: "Address feedback"
      description: "Update code based on review comments"
    
    - name: "Merge"
      description: "Merge after approval and passing checks"
```

### Testing Strategy
```yaml
# Testing pyramid
testing_strategy:
  unit_tests:
    coverage: "80%+"
    framework: "pytest/jest"
    execution: "fast"
  
  integration_tests:
    coverage: "60%+"
    framework: "pytest/jest"
    execution: "medium"
  
  e2e_tests:
    coverage: "40%+"
    framework: "cypress/playwright"
    execution: "slow"
  
  performance_tests:
    framework: "k6/locust"
    execution: "on-demand"
```

## 🐳 Container Development

### Docker Development Setup
```dockerfile
# Development Dockerfile
FROM node:18-alpine AS development

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Expose development port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]
```

### Docker Compose Development
```yaml
# docker-compose.dev.yml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
      - DEBUG=true
    depends_on:
      - db
      - redis

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=app_dev
      - POSTGRES_USER=app
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

### Kubernetes Development
```bash
# Create development cluster
k3d cluster create dev \
  --servers 1 \
  --agents 2 \
  --port "8080:80@loadbalancer" \
  --port "8443:443@loadbalancer"

# Set context
kubectl config use-context k3d-dev

# Deploy development environment
kubectl apply -f k8s/development/

# Port forward services
kubectl port-forward svc/app-service 3000:80
kubectl port-forward svc/db-service 5432:5432
```

## 🧪 Testing Strategy

### Unit Testing
```python
# Python unit test example
import pytest
from app.services.user_service import UserService

class TestUserService:
    def test_create_user(self):
        service = UserService()
        user = service.create_user("test@example.com", "password")
        assert user.email == "test@example.com"
        assert user.is_active is True

    def test_validate_password(self):
        service = UserService()
        assert service.validate_password("strong_password") is True
        assert service.validate_password("weak") is False
```

```javascript
// JavaScript unit test example
import { UserService } from '../services/userService';

describe('UserService', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  test('should create user successfully', () => {
    const user = userService.createUser('test@example.com', 'password');
    expect(user.email).toBe('test@example.com');
    expect(user.isActive).toBe(true);
  });

  test('should validate password correctly', () => {
    expect(userService.validatePassword('strong_password')).toBe(true);
    expect(userService.validatePassword('weak')).toBe(false);
  });
});
```

### Integration Testing
```yaml
# Integration test configuration
apiVersion: v1
kind: Pod
metadata:
  name: integration-test
spec:
  containers:
  - name: test
    image: app:test
    command: ["npm", "run", "test:integration"]
    env:
    - name: DATABASE_URL
      value: "postgresql://test:test@test-db:5432/test"
    - name: REDIS_URL
      value: "redis://test-redis:6379"
  restartPolicy: Never
```

### End-to-End Testing
```javascript
// Cypress E2E test example
describe('User Authentication', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('[data-testid=email]').type('user@example.com');
    cy.get('[data-testid=password]').type('password');
    cy.get('[data-testid=login-button]').click();
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid=user-menu]').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    cy.visit('/login');
    cy.get('[data-testid=email]').type('invalid@example.com');
    cy.get('[data-testid=password]').type('wrong');
    cy.get('[data-testid=login-button]').click();
    cy.get('[data-testid=error-message]').should('be.visible');
  });
});
```

## 🔍 Debugging

### Local Debugging
```bash
# Debug container
docker run -it --rm app:dev /bin/bash

# View container logs
docker logs -f container_id

# Check container resources
docker stats container_id

# Inspect container
docker inspect container_id

# Execute commands in running container
docker exec -it container_id /bin/bash
```

### Kubernetes Debugging
```bash
# Check pod status
kubectl get pods -n development
kubectl describe pod pod_name -n development

# View pod logs
kubectl logs -f pod_name -n development
kubectl logs -f deployment/app-deployment -n development

# Debug service
kubectl get svc -n development
kubectl describe svc service_name -n development

# Port forward for debugging
kubectl port-forward pod/pod_name 8080:80 -n development

# Execute commands in pod
kubectl exec -it pod_name -n development -- /bin/bash
```

### Application Debugging
```yaml
# Debug configuration
debug_configuration:
  nodejs:
    - name: "Enable debug logging"
      command: "DEBUG=* npm start"
    
    - name: "Enable source maps"
      command: "NODE_ENV=development npm run dev"
  
  python:
    - name: "Enable debug mode"
      command: "python -m pdb app.py"
    
    - name: "Enable verbose logging"
      command: "LOG_LEVEL=DEBUG python app.py"
  
  golang:
    - name: "Enable race detection"
      command: "go run -race main.go"
    
    - name: "Enable profiling"
      command: "go run -cpuprofile=cpu.prof main.go"
```

## 🔒 Security

### Development Security
```yaml
# Security measures
security_measures:
  code_scanning:
    - tool: "SonarQube"
      frequency: "on-commit"
    
    - tool: "Snyk"
      frequency: "daily"
    
    - tool: "Trivy"
      frequency: "on-build"
  
  dependency_scanning:
    - npm audit
    - pip-audit
    - go mod verify
  
  secret_scanning:
    - git-secrets
    - truffleHog
    - detect-secrets
```

### Access Control
```yaml
# RBAC configuration
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: developer
  namespace: development
rules:
- apiGroups: [""]
  resources: ["pods", "services", "configmaps"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
- apiGroups: ["apps"]
  resources: ["deployments", "replicasets"]
  verbs: ["get", "list", "watch", "create", "update", "patch", "delete"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: developer-binding
  namespace: development
subjects:
- kind: User
  name: developer@company.com
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: developer
  apiGroup: rbac.authorization.k8s.io
```

## ⚡ Performance

### Code Optimization
```yaml
# Performance optimization
performance_optimization:
  profiling:
    - tool: "Node.js profiler"
      command: "node --prof app.js"
    
    - tool: "Python profiler"
      command: "python -m cProfile app.py"
    
    - tool: "Go profiler"
      command: "go tool pprof"
  
  memory_management:
    - garbage_collection: "optimize"
    - memory_leaks: "detect and fix"
    - resource_cleanup: "proper disposal"
  
  cpu_optimization:
    - algorithm_efficiency: "optimize algorithms"
    - caching: "implement caching"
    - parallel_processing: "use concurrency"
```

### Build Optimization
```dockerfile
# Multi-stage optimized build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy built application
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Change ownership
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start application
CMD ["npm", "start"]
```

## 🔍 Troubleshooting

### Common Issues

#### 1. Build Failures
```bash
# Check Docker build context
docker build --progress=plain --no-cache .

# Verify dependencies
npm audit
pip check
go mod verify

# Check disk space
df -h
docker system df
```

#### 2. Test Failures
```bash
# Run tests with debug
npm run test:debug
pytest -v --tb=long
go test -v

# Check test coverage
npm run test:coverage
pytest --cov=app
go test -cover
```

#### 3. Deployment Issues
```bash
# Check Kubernetes resources
kubectl get all -n development
kubectl describe deployment app-deployment -n development

# Check service endpoints
kubectl get endpoints -n development
kubectl describe service app-service -n development

# Check ingress
kubectl get ingress -n development
kubectl describe ingress app-ingress -n development
```

#### 4. Performance Issues
```bash
# Check resource usage
kubectl top pods -n development
kubectl top nodes

# Check logs for errors
kubectl logs -f deployment/app-deployment -n development

# Check network connectivity
kubectl exec -it pod_name -n development -- ping -c 4 kubernetes.default
```

## 📋 Best Practices

### Development Practices
```yaml
# Development best practices
development_practices:
  code_quality:
    - use_linters: "ESLint, Prettier, Black"
    - follow_conventions: "consistent naming and formatting"
    - write_documentation: "code comments and README files"
    - use_type_safety: "TypeScript, type hints, generics"
  
  version_control:
    - meaningful_commits: "clear commit messages"
    - feature_branches: "isolate changes"
    - code_reviews: "peer review all changes"
    - clean_history: "squash commits when merging"
  
  testing:
    - write_tests_first: "TDD approach"
    - maintain_coverage: "80%+ coverage"
    - test_automation: "CI/CD integration"
    - performance_testing: "load and stress tests"
```

### Container Best Practices
```yaml
# Container best practices
container_best_practices:
  security:
    - use_minimal_base: "Alpine Linux"
    - run_non_root: "create non-root user"
    - scan_vulnerabilities: "regular security scans"
    - limit_capabilities: "drop unnecessary capabilities"
  
  efficiency:
    - multi_stage_builds: "reduce image size"
    - layer_caching: "optimize build times"
    - copy_optimization: "copy dependencies first"
    - health_checks: "implement health endpoints"
  
  maintainability:
    - clear_labels: "add metadata labels"
    - documentation: "document container purpose"
    - version_tagging: "use semantic versioning"
    - base_image_updates: "regular security updates"
```

### Kubernetes Best Practices
```yaml
# Kubernetes best practices
kubernetes_best_practices:
  resource_management:
    - set_limits: "CPU and memory limits"
    - use_requests: "resource requests"
    - horizontal_scaling: "HPA configuration"
    - vertical_scaling: "VPA for auto-scaling"
  
  security:
    - network_policies: "restrict pod communication"
    - pod_security: "security contexts"
    - rbac: "role-based access control"
    - secrets_management: "secure secret handling"
  
  reliability:
    - health_checks: "liveness and readiness probes"
    - rolling_updates: "zero-downtime deployments"
    - resource_quotas: "namespace resource limits"
    - backup_strategies: "data backup and recovery"
```

## 📈 Performance Metrics

### Key Performance Indicators
- **Build Time**: Target < 5 minutes
- **Test Execution Time**: Target < 10 minutes
- **Deployment Time**: Target < 3 minutes
- **Code Review Time**: Target < 24 hours

### Development Metrics
```yaml
# Development metrics
development_metrics:
  code_quality:
    - test_coverage: "87%"
    - code_complexity: "< 10"
    - technical_debt: "< 5%"
  
  productivity:
    - commit_frequency: "5-10 commits/day"
    - feature_delivery: "2-3 features/week"
    - bug_resolution: "< 24 hours"
  
  reliability:
    - build_success_rate: "99.2%"
    - deployment_success_rate: "98.5%"
    - test_pass_rate: "99.8%"
```

## 📝 Next Steps

1. **Enhance Development Tools**: Add more automation and tooling
2. **Security Hardening**: Implement additional security measures
3. **Performance Optimization**: Optimize build and test processes
4. **Documentation**: Expand development guides and tutorials
5. **Team Training**: Conduct development tool training sessions

## 📚 Related Documentation

- [CI/CD Pipeline](/development/ci-cd/)
- [Monitoring Setup](/development/monitoring/)
- [Infrastructure Overview](/overview/)
- [Deployment Guide](/installation/deployment/)
- [Security Guidelines](/development/security/) 