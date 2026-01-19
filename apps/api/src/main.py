"""
FastAPI Backend - Main Application Entry Point

TODO: Add middleware, CORS, rate limiting, etc.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.core.config import settings

app = FastAPI(
    title="Portfolio API",
    description="Backend API for portfolio application",
    version="1.0.0",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# TODO: Include routers when modules are ready
# from src.modules.rag.router import router as rag_router
# from src.modules.code_runner.router import router as runner_router
# from src.modules.profiles.router import router as profiles_router

# app.include_router(rag_router, prefix="/api/rag", tags=["RAG"])
# app.include_router(runner_router, prefix="/api/runner", tags=["Code Runner"])
# app.include_router(profiles_router, prefix="/api/profiles", tags=["Profiles"])


@app.get("/")
async def root():
    return {
        "message": "Portfolio API",
        "version": "1.0.0",
        "status": "operational",
    }


@app.get("/health")
async def health():
    return {"status": "healthy"}
