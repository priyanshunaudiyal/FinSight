import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import healthRoutes from "./routes/health.routes.js";
import chartsRoutes from "./routes/charts.routes.js";
import authRoutes from "../src/routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/charts", chartsRoutes);
app.use("/api/auth", authRoutes);

export default app;
