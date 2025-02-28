import { z } from 'zod';

// Format input schema
const formatSchema = z.object({
  json: z.string(),
});
export const validateFormatInput = (data: unknown) => formatSchema.parse(data);

// Validate input schema
const validateSchema = z.object({
  json: z.string(),
  schema: z.string(),
});
export const validateValidateInput = (data: unknown) => validateSchema.parse(data);

// Convert input schema
const convertSchema = z.object({
  json: z.string(),
  format: z.enum(['yaml', 'xml', 'csv']),
});
export const validateConvertInput = (data: unknown) => convertSchema.parse(data);

// Update document schema
const updateSchema = z.object({
  docId: z.string(),
  json: z.string(),
});
export const validateUpdateInput = (data: unknown) => updateSchema.parse(data);