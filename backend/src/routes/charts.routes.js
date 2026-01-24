import { Router } from "express";
import { getChart } from "../controllers/charts.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();

// Public (optional)
// router.get("/:id", getChart);

// Protected
router.get("/:id", requireAuth, getChart);

export default router;
