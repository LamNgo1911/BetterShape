import app from "./app";
import { pool } from "./models/db";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to PostgreSQL database
pool
  .connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

    console.log("Connected to PostgreSQL database");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL database", err);
  });
