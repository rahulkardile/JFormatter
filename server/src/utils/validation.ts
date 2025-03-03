import { z } from 'zod';

// Register input schema
const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
export const validateRegisterInput = (data: unknown) => registerSchema.parse(data);
  
  // Login input schema
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
export const validateLoginInput = (data: unknown) => loginSchema.parse(data);

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