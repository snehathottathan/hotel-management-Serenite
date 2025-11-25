import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const ADMIN_EMAIL = "admin@resort.com";
const ADMIN_PASSWORD = "admin123";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email !== ADMIN_EMAIL) {
    return res.status(401).json({ message: "Invalid email" });
  }

  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    {
      email: ADMIN_EMAIL,
      role: "admin"
    },
    process.env.JWT_SECRET || "secretkey",
    { expiresIn: "1d" }
  );

  res.json({
    message: "Login successful",
    token
  });
};
