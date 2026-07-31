import express from "express";
import connectDB from "./config/db";
import app from "./app";
import { env } from "./config/env";
connectDB();

app.use(express.json());

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
