import { Router } from "express";
import { getChart } from "../controllers/charts.controller.js";

const router = Router();

router.get("/:id", getChart);

export default router;
