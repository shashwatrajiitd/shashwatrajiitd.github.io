"""
Application Configuration

TODO: Add environment variable loading with pydantic-settings
"""

from typing import List
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # API Settings
    API_V1_PREFIX: str = "/api"
    DEBUG: bool = False
    
    # CORS
    CORS_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:3001",
    ]
    
    # TODO: RAG Settings
    # RAG_VECTOR_DB_PATH: str = "./data/vectorstore"
    # RAG_EMBEDDING_MODEL: str = "sentence-transformers/all-MiniLM-L6-v2"
    # RAG_LLM_MODEL: str = "gpt-4"
    # RAG_LLM_API_KEY: str = ""
    
    # TODO: Code Runner Settings
    # RUNNER_TIMEOUT_SECONDS: int = 30
    # RUNNER_MEMORY_LIMIT_MB: int = 512
    # RUNNER_CPU_LIMIT: float = 1.0
    # RUNNER_DOCKER_IMAGE: str = "python:3.11-slim"
    
    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
