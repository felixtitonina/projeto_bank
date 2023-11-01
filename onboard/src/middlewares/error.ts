import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../helpers/api-erros';

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  console.log('error.message', error.message);
  const message = error.statusCode ? error.message : 'Internal Server Error';
  return res.status(statusCode).json({ message });
};
