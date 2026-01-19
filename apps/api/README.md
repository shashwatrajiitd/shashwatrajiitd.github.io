# Portfolio API - FastAPI Backend

Production-grade FastAPI backend for portfolio application.

## Architecture

```
apps/api/
├── src/
│   ├── main.py              # FastAPI app entry point
│   │
│   ├── modules/
│   │   ├── rag/             # RAG-based AI chat
│   │   │   ├── router.py
│   │   │   ├── pipeline.py
│   │   │   ├── retriever.py
│   │   │   ├── vectorstore.py
│   │   │   └── prompts.py
│   │   │
│   │   ├── code_runner/     # Python code execution
│   │   │   ├── router.py
│   │   │   ├── sandbox.py
│   │   │   ├── executor.py
│   │   │   └── limits.py
│   │   │
│   │   └── profiles/        # Profile data API
│   │       └── router.py
│   │
│   ├── core/
│   │   ├── config.py        # Configuration
│   │   ├── logging.py       # Logging setup
│   │   └── security.py      # Auth & security
│   │
│   └── shared/
│       ├── schemas.py       # Shared Pydantic models
│       └── constants.py     # Constants
│
└── requirements.txt
```

## Development

```bash
# Install dependencies
pip install -r requirements.txt

# Run development server
uvicorn src.main:app --reload

# Run with Docker
docker build -t portfolio-api .
docker run -p 8000:8000 portfolio-api
```

## TODO: Implementation

### RAG Module
- [ ] Set up vector database (ChromaDB/Pinecone)
- [ ] Implement embedding pipeline
- [ ] Create retrieval system
- [ ] Integrate LLM (OpenAI/Gemini)
- [ ] Add streaming support

### Code Runner Module
- [ ] Set up Docker sandbox
- [ ] Implement code validation
- [ ] Add resource limits
- [ ] Create execution pipeline
- [ ] Add streaming output

### Profiles Module
- [ ] Create profile data models
- [ ] Implement profile endpoints
- [ ] Add profile-specific content API

## API Endpoints

- `GET /` - API info
- `GET /health` - Health check
- `POST /api/rag/chat` - RAG chat (TODO)
- `POST /api/runner/execute` - Code execution (TODO)
- `GET /api/profiles/{profile_id}` - Profile data (TODO)
