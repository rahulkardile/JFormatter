import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthRequest extends Request {
    user?: any;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "❌ Unauthorized" });

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "❌ Invalid token" });
    }
};

export const adminMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (req.user.role !== "admin") return res.status(403).json({ message: "❌ Access denied" });
    next();
};
