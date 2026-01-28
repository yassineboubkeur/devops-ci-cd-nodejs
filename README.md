# DevOps CI/CD Pipeline - Node.js

This project demonstrates how to build a Node.js application
and apply a CI/CD pipeline using:

- GitHub Actions
- Docker
- Kubernetes
- Prometheus
- Grafana

## Goal
Automation of:
- Build
- Test
- Deployment
- Monitoring

## 1. Project Overview
## 2. Architecture Diagram
## 3. Tech Stack
## 4. Setup Instructions
## 5. CI/CD Pipeline
## 6. Deployment
## 7. Monitoring & Logging
## 8. Screenshots
## 9. Author

Setup Instructions

Clone repository

git clone <repo-url>
cd devops-ci-cd-nodejs


Build Docker image

docker build -t devops-nodejs-app:latest ./app


Apply Kubernetes manifests

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml


Port-forward to access

kubectl port-forward service/devops-nodejs-service 3000:80 --address 0.0.0.0


Access in browser:

http://<EC2_PUBLIC_IP>:3000