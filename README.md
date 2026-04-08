# Drawbridge

A web-based physical gate opener.

## Architecture

```
┌─────────────────┐      HTTPS       ┌──────────────────┐
│   Browser/App   │ ◄──────────────► │  Drawbridge UI   │
│                 │                  │  (Quasar/Vue 3)  │
└─────────────────┘                  └────────┬─────────┘
                                              │
                                              │ API calls
                                              ▼
                                     ┌──────────────────┐
                                     │   Gate Backend   │
                                     │  (configurable   │
                                     │      FQDN)       │
                                     └────────┬─────────┘
                                              │
                                              ▼
                                     ┌──────────────────┐
                                     │  Physical Gate   │
                                     └──────────────────┘
```

**Frontend (this repo):** Quasar/Vue 3 SPA that provides the gate control UI. Users configure the backend FQDN, then can check gate status and open it for configurable durations (1, 10, 30, or 60 minutes).

**Backend:** Separate service (not in this repo) that interfaces with the physical gate hardware. Exposes REST API endpoints:

- `GET /hold` - Check current gate status
- `POST /hold` - Open gate with duration
- `POST /hold/cancel` - Release gate hold

## Deployment

The app can be deployed to:

### GitHub Pages

Automatically deployed on push to `main` via GitHub Actions.

### Kubernetes/OpenShift

```bash
# Build and push image (from amd64 machine or use Cloud Build)
gcloud builds submit --tag us-docker.pkg.dev/PROJECT/drawbridge/drawbridge:latest

# Generate manifests with your config
cd k8s
cp .env.example .env  # Edit with your GCP project/region
./generate.sh

# Deploy
kubectl apply -f .
```

## Development

### Install dependencies

```bash
npm install
```

### Start dev server

```bash
quasar dev
```

### Build for production

```bash
quasar build
```

### Lint and format

```bash
npm run lint
npm run format
```

## Configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

The `publicPath` is configurable via `PUBLIC_PATH` environment variable:

- Default: `/` (for Kubernetes deployment)
- GitHub Pages: `/drawbridge-app` (set automatically by deploy script)
