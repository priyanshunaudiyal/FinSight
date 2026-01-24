import { verifyToken } from "../utils/jwt.js";
import prisma from "../db.js";

export async function requireAuth(req, res, next) {
  try {
    console.log("Authorization header:", req.headers.authorization);

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Missing auth header" });
    }

    const token = authHeader.split(" ")[1];
    console.log("Token:", token);

    const decoded = verifyToken(token);
    console.log("Decoded:", decoded);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    console.log("User from DB:", user);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("JWT middleware error:", err);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
