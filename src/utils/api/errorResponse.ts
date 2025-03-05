import {ErrorResponse} from "../../types/api/response";

export const isErrorResponse = (err: unknown): err is ErrorResponse => {
  if (typeof err !== 'object' || err === null) return false

  const e = err as Record<string, unknown> // Приведение к более гибкому типу
  if (typeof e.id !== 'string') return false
  if (typeof e.error !== 'object' || e.error === null) return false

  const errorObj = e.error as Record<string, unknown>
  if (typeof errorObj.code !== 'number') return false
  if (typeof errorObj.message !== 'string') return false

  return true
}