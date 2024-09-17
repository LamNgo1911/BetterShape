import express, { Application } from "express";

import { pool } from "./models/db";

const app: Application = express();
const PORT = process.env.PORT || 3000;

import userRouter from "./routes/user";

// Connect to PostgreSQL database
pool
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    const password = process.env.DATABASE_PASSWORD as string;
    console.error("Error connecting to PostgreSQL database", err);
  });

// Routes
app.use("/api/v1", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
