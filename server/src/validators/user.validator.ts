import { z } from 'zod';

export const registerSchema = z.object({
    email: z.string().email(),
    username: z.string().min(3).max(20).optional(),
    password: z.string().min(8),
    fullName: z.string().min(1),
    dateOfBirth: z.preprocess((arg) => {
      if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    }, z.date().optional()),
    phone: z.string().max(14).optional(),
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
