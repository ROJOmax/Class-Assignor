import express from "express";
import { authenticateJWT, restrictTo } from "../middleware/authMiddleware.js";
import { sanitizeInputs } from "../middleware/sanitizeMiddleware.js";

const router = express.Router();

// Middlwares

router.use(authenticateJWT);
router.use(restrictTo("teacher"));
router.use(sanitizeInputs);

// routes for teachers actions

export default router;
