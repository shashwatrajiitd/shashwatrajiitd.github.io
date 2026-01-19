# Quick Start Guide

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Python >= 3.10 (for backend)

## Initial Setup

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd apps/web
npm install

# Install backend dependencies
cd ../api
pip install -r requirements.txt
```

## Development

### Start Frontend Only

```bash
cd apps/web
npm run dev
```

Frontend will be available at http://localhost:3000

### Start Backend Only

```bash
cd apps/api
uvicorn src.main:app --reload
```

Backend will be available at http://localhost:8000

### Start Both (Recommended)

From root directory:

```bash
npm run dev
```

This uses Turbo to run both frontend and backend concurrently.

## Building

```bash
# Build all packages and apps
npm run build

# Build frontend only
cd apps/web
npm run build

# Build backend only
cd apps/api
# Backend doesn't require build step (Python)
```

## Project Structure

- `apps/web/` - Next.js frontend
- `apps/api/` - FastAPI backend
- `packages/` - Shared packages
- `infra/` - Infrastructure configs

## Next Steps

1. Complete profile migrations (see TODO comments in profile files)
2. Set up backend services (RAG, code runner)
3. Test all routes and functionality
4. Deploy to production

For detailed migration information, see `MIGRATION_SUMMARY.md`.
