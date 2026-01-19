"""
Logging Configuration

TODO: Set up structured logging with proper formatters
"""

import logging
import sys
from typing import Any

# TODO: Configure proper logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    handlers=[logging.StreamHandler(sys.stdout)],
)

logger = logging.getLogger(__name__)
