import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET || "secretkey", (err, decoded) => {
  if (err) {
    console.log("JWT ERROR:", err);
    return res.status(403).json({ message: "Invalid token" });
  }

  console.log("DECODED TOKEN:", decoded);  // ← Debug
  (req as any).user = decoded;
  next();
});

};
