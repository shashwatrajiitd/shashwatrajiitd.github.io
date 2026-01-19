/**
 * RAG Client for AI Chat Assistant
 * 
 * TODO: Implement RAG client when backend RAG module is ready
 * 
 * This will connect to the FastAPI RAG endpoint for:
 * - Chat completions
 * - Context retrieval
 * - Stream responses
 */

import { apiClient } from './api-client'

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface ChatRequest {
  messages: ChatMessage[]
  profileId?: string
  stream?: boolean
}

export interface ChatResponse {
  message: string
  sources?: string[]
  tokens?: number
}

export class RAGClient {
  async chat(request: ChatRequest): Promise<ChatResponse> {
    // TODO: Implement when backend is ready
    // return apiClient.post<ChatResponse>('/api/rag/chat', request)
    throw new Error('RAG client not yet implemented')
  }

  async streamChat(
    request: ChatRequest,
    onChunk: (chunk: string) => void
  ): Promise<void> {
    // TODO: Implement streaming when backend is ready
    throw new Error('RAG streaming not yet implemented')
  }
}

export const ragClient = new RAGClient()
