import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
  })
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/products", productRoutes);

export default app;
