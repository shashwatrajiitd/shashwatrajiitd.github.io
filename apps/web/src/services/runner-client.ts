/**
 * Code Runner Client for Python Execution
 * 
 * TODO: Implement code runner client when backend sandbox is ready
 * 
 * This will connect to the FastAPI code runner endpoint for:
 * - Python code execution
 * - Real-time output streaming
 * - Execution limits and safety
 */

import { apiClient } from './api-client'

export interface CodeExecutionRequest {
  code: string
  language: 'python'
  timeout?: number
}

export interface CodeExecutionResponse {
  output: string
  error?: string
  executionTime?: number
  memoryUsed?: number
}

export class RunnerClient {
  async execute(request: CodeExecutionRequest): Promise<CodeExecutionResponse> {
    // TODO: Implement when backend is ready
    // return apiClient.post<CodeExecutionResponse>('/api/runner/execute', request)
    throw new Error('Code runner client not yet implemented')
  }

  async streamExecute(
    request: CodeExecutionRequest,
    onOutput: (chunk: string) => void,
    onError: (error: string) => void
  ): Promise<void> {
    // TODO: Implement streaming execution when backend is ready
    throw new Error('Code runner streaming not yet implemented')
  }
}

export const runnerClient = new RunnerClient()
