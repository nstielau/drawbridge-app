#!/bin/bash
# Generate deployment.yaml from template
# Usage: ./generate.sh (reads from .env) or GCP_PROJECT=x GCP_REGION=y ./generate.sh

set -e
cd "$(dirname "$0")"

# Source .env if it exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

if [ -z "$GCP_PROJECT" ] || [ -z "$GCP_REGION" ] || [ -z "$ROUTE_HOST" ]; then
    echo "Error: GCP_PROJECT, GCP_REGION, and ROUTE_HOST must be set"
    echo "Example: GCP_PROJECT=myproject GCP_REGION=us ROUTE_HOST=app.example.com ./generate.sh"
    exit 1
fi

export IMAGE_TAG="${IMAGE_TAG:-latest}"
export GCP_REGION GCP_PROJECT ROUTE_HOST

envsubst < deployment.yaml.tmpl > deployment.yaml
envsubst < route.yaml.tmpl > route.yaml
echo "Generated manifests with:"
echo "  GCP_REGION=$GCP_REGION"
echo "  GCP_PROJECT=$GCP_PROJECT"
echo "  IMAGE_TAG=$IMAGE_TAG"
echo "  ROUTE_HOST=$ROUTE_HOST"
