import { Response } from 'express';

/**
 * Sends a success response with data.
 * @param res - The Express response object.
 * @param data - The data to send.
 */
export const successResponse = (res: Response, data: any) => {
  res.status(200).json(data);
};

/**
 * Sends an error response with a message.
 * @param res - The Express response object.
 * @param status - The HTTP status code.
 * @param message - The error message.
 */
export const errorResponse = (res: Response, status: number, message: string) => {
  res.status(status).json({ error: message });
};