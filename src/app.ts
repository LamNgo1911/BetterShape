import express, { Application } from "express";

import { pool } from "./models/db";

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Connect to PostgreSQL database
pool
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database", err);
  });

// Routes
app.use("/users");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
