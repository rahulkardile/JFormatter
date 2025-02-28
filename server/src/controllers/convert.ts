import { Request, Response } from 'express';
import { JSONConverter } from '../models/JSONConverter';
import { successResponse, errorResponse } from '../utils/response';
import { validateConvertInput } from '../utils/validation';

/**
 * Controller for converting JSON to other formats.
 */
export const convertController = async (req: Request, res: Response) => {
  try {
    const validated = validateConvertInput(req.body);
    const converted = JSONConverter.convert(validated.json, validated.format);
    successResponse(res, { converted });
  } catch (e) {
    errorResponse(res, 400, (e as Error).message);
  }
};