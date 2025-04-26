import express from "express";
import { authenticateJWT, restrictTo } from "../middleware/authMiddleware";
import { sanitizeInputs } from "../middleware/sanitizeMidddleware";

const router = express.Router();

// Middlwares

router.use(authenticateJWT);
router.use(restrictTo("responsible"));
router.use(sanitizeInputs);

// Routes for responsible Actions
