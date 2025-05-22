#!/bin/bash

# Set your Docker registry
DOCKER_REGISTRY=${DOCKER_REGISTRY:-"your-registry.com"}

# Build the Docker image
echo "Building Docker image..."
docker build -t ${DOCKER_REGISTRY}/agro-frontend:latest .

# Push the image to registry
echo "Pushing image to registry..."
docker push ${DOCKER_REGISTRY}/agro-frontend:latest

# Deploy to Kubernetes
echo "Deploying to Kubernetes..."
kubectl apply -f ../k8s/frontend.yaml

echo "Deployment completed successfully!" 