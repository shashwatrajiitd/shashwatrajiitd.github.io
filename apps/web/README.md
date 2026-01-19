# Portfolio Web - Next.js Frontend

Production-grade Next.js frontend with App Router and TypeScript.

## Architecture

```
apps/web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout (Netflix shell)
│   │   ├── page.tsx           # Profile selection screen
│   │   └── profile/
│   │       └── [profileId]/   # Dynamic profile routes
│   │
│   ├── profiles/               # CORE DOMAIN - Profile isolation
│   │   ├── developer/
│   │   ├── recruiter/
│   │   ├── stalker/
│   │   └── adventurer/
│   │
│   ├── components/             # Shared components
│   │   ├── netflix/           # Netflix-style UI components
│   │   ├── editor/            # Monaco editor + terminal
│   │   └── shared/            # Common components
│   │
│   ├── features/               # Feature modules
│   │   ├── ai-chat/           # TODO: RAG-based chat
│   │   ├── code-runner/       # TODO: Python execution
│   │   └── profile-switcher/  # Profile switching logic
│   │
│   ├── services/              # API clients
│   │   ├── api-client.ts      # TODO: Backend API client
│   │   ├── rag-client.ts      # TODO: RAG service client
│   │   └── runner-client.ts   # TODO: Code runner client
│   │
│   ├── styles/                # Global styles
│   │   ├── globals.css
│   │   └── netflix-theme.css
│   │
│   └── config/                # Configuration
│       ├── profiles.ts        # Profile definitions
│       └── routes.ts          # Route constants
│
└── public/                    # Static assets
```

## Profile Isolation

Each profile is a self-contained domain with:
- `layout/` - Profile-specific layouts
- `sections/` - Profile sections (About, Experience, etc.)
- `components/` - Profile-specific components
- `data/` - Profile data and content
- `config.ts` - Profile configuration

## Development

```bash
npm run dev
```

## TODO: Backend Integration

- [ ] Connect to FastAPI backend for profile data
- [ ] Integrate RAG chat assistant
- [ ] Connect code runner to Python sandbox
- [ ] Add analytics tracking
