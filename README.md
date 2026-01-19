# Portfolio Netflix - Production-Grade Monorepo

A production-grade portfolio application with Netflix-style UI, built as a scalable monorepo architecture.

## Architecture

```
portfolio/
├── apps/
│   ├── web/          # Next.js frontend (App Router + TypeScript)
│   └── api/          # FastAPI backend
├── packages/
│   ├── ui/           # Shared design system components
│   ├── types/        # Shared TypeScript types
│   └── utils/        # Shared utilities
└── infra/            # Infrastructure configs (Docker, nginx)
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Python >= 3.10 (for backend)

### Installation

```bash
# Install dependencies
npm install

# Start development servers
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## Development

### Frontend (Next.js)

```bash
cd apps/web
npm run dev
```

### Backend (FastAPI)

```bash
cd apps/api
python -m uvicorn src.main:app --reload
```

## Building

```bash
# Build all packages and apps
npm run build
```

## Project Structure

### Frontend (`apps/web`)

- **Profile-based architecture**: Each profile (Developer, Recruiter, Stalker, Adventurer) is isolated in its own domain
- **Feature-based organization**: Features like AI chat, code runner are modular
- **Shared components**: Netflix-style UI components in `packages/ui`

### Backend (`apps/api`)

- **RAG module**: TODO - RAG-based AI chat assistant
- **Code runner**: TODO - Python code execution sandbox
- **Profile API**: Profile-specific data endpoints

## TODO: Backend Integration

- [ ] RAG pipeline setup with vector database
- [ ] Python sandbox execution environment
- [ ] Profile-specific data API endpoints
- [ ] Authentication and rate limiting

## License

Private - All rights reserved
