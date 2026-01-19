"""
Shared Pydantic Schemas

TODO: Define shared data models
"""

from pydantic import BaseModel
from typing import Optional, List, Dict, Any


class ProfileData(BaseModel):
    """Profile data schema"""
    id: str
    name: str
    display_name: str
    icon: str
    description: Optional[str] = None
    sections: List[Dict[str, Any]] = []


class APIResponse(BaseModel):
    """Standard API response"""
    success: bool
    data: Optional[Any] = None
    error: Optional[str] = None
    message: Optional[str] = None
