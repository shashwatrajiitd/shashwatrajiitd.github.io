"""
RAG Prompts

TODO: Define prompt templates for RAG pipeline
"""

def build_rag_prompt(query: str, context: list[str]) -> str:
    """
    Build prompt for RAG generation
    
    TODO: Create proper prompt template with:
    - System instructions
    - Retrieved context
    - User query
    - Response format
    """
    context_text = "\n\n".join(context)
    
    prompt = f"""You are a helpful AI assistant for Shashwat Raj's portfolio.

Context from portfolio:
{context_text}

User question: {query}

Please provide a helpful answer based on the context above. If the context doesn't contain relevant information, say so.
"""
    return prompt
