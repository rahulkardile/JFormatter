import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import { IUser } from '../Interfaces/IUser';

interface RegisterInput {
  email: string;
  username?: string;
  password: string;
  fullName: string;
}

interface LoginInput {
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterInput): Promise<IUser> => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = new User({
    email: data.email,
    username: data.username,
    password: hashedPassword,
    fullName: data.fullName,
  });
  return user.save();
};

export const loginUser = async (data: LoginInput): Promise<{ user: IUser; token: string }> => {
  const user = await User.findOne({ email: data.email });
  if (!user) {
    throw new Error('User not found');
  }
  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });
  return { user, token };
};
