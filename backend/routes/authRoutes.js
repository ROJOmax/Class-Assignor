import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { loginRateLimiter } from "../middleware/rateLimitMiddleware.js";
import { sanitizeInputs } from "../middleware/sanitizeMiddleware.js";
import { IoRoseOutline } from "react-icons/io5";

const router = express.Router();

router.post("/login", loginRateLimiter, sanitizeInputs, async (req, res) => {
  const { id, password } = req.body;

  try {
    const user = await User.findOne({ id });
    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    // Compare password using bcrypt.compare
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT Token

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
