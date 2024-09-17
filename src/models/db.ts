import { Pool } from "pg";

const password = process.env.DATABASE_PASSWORD as string;

// PostgreSQL connection configuration
export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "fitness",
  password: password,
  port: 5432, // Default PostgreSQL port
});

