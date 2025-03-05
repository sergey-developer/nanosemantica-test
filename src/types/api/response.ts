export interface ErrorResponse {
  id: string
  error: {
    code: number
    message: string
  }
}

export interface SuccessResponse<R> {
  id: string
  result: R
}