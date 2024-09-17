import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const password = process.env.DATABASE_PASSWORD as string;

// PostgreSQL connection configuration
export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bettershape",
  password: password,
  port: 5432, // Default PostgreSQL port
});
