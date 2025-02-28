import { Request, Response } from 'express';
import { JSONFormatter } from '../models/JSONFormatter';
import { successResponse, errorResponse } from '../utils/response';
import { validateFormatInput } from '../utils/validation';

/**
 * Controller for formatting JSON.
 */
export const formatController = async (req: Request, res: Response) => {
  try {
    const validated = validateFormatInput(req.body);
    const formatted = JSONFormatter.format(validated.json);
    successResponse(res, { formatted });
  } catch (e) {
    errorResponse(res, 400, (e as Error).message);
  }
};