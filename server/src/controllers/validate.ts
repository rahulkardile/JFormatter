import { Request, Response } from 'express';
import { JSONValidator } from '../models/JSONValidator';
import { successResponse, errorResponse } from '../utils/response';
import { validateValidateInput } from '../utils/validation';

/**
 * Controller for validating JSON against a schema.
 */
export const validateController = async (req: Request, res: Response) => {
  try {
    const validated = validateValidateInput(req.body);
    const result = JSONValidator.validate(validated.json, validated.schema);
    successResponse(res, result);
  } catch (e) {
    errorResponse(res, 400, (e as Error).message);
  }
};