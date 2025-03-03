import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20).optional(),
  password: z.string().min(8),
  fullName: z.string().min(1),
  // Add additional fields as needed (e.g., dateOfBirth)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
