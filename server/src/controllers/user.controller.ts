import { Request, Response } from 'express';
import { registerSchema, loginSchema } from '../validators/user.validator';
import { registerUser, loginUser } from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    const user = await registerUser(validatedData);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error: any) {
    res.status(400).json({ error: error.errors || error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const validatedData = loginSchema.parse(req.body);
    const { user, token } = await loginUser(validatedData);
    // Optionally, set the token as an httpOnly cookie for security
    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error: any) {
    res.status(400).json({ error: error.errors || error.message });
  }
};
