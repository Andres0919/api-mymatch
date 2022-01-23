'use strict'

export interface IResponse {
  data: unknown
  error: boolean
  message: string | null
  status: number
}

export const responseSuccess = (
  data: object = {},
  message: string = '',
  status: number = 200
): IResponse => ({
  data,
  error: false,
  message,
  status,
})

export const responseError = (
  message: string | null = 'Internal Server Error',
  status: number = 500
): IResponse => ({
  data: null,
  error: true,
  message: message || 'Internal Server Error',
  status,
})
