import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import { authenticateJWT, restrictTo } from "../middleware/authMiddleware.js";
import { sanitizeInputs } from "../middleware/sanitizeMiddleware.js";

const router = express.Router();

// Apply middlware to all admin Routes
// router.use(authenticateJWT);
// router.use(restrictTo("admin"));
// router.use(sanitizeInputs);

// Post /api/admin/users/test - temp route to test user creation

router.post("/users/test", async (req, res) => {
  try {
    const Timestamp = Date.now();
    const hashedPassword = await bcrypt.hash("password123", 10);
    const user = new User({
      id: `test-${Timestamp}`,
      name: "Yassine",
      firstName: "Ben",
      email: `test-${Timestamp}@gmail.com`,
      password: hashedPassword,
      role: "teacher",
      phone: "0542345295",
      ranking: "Maître de Conférence Classe A",
    });
    await user.save();
    res.status(201).json({ message: "Test user Created", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      error: "Failed to Create User",
      details: error.message,
      stack: error.stack,
    });
  }
});

export default router;
