import { userInput } from "../utils/types";
import { pool } from "./db";

const createUser = async ({ name, email }: userInput) => {
  const query = `INSERT INTO users (name, email) VALUES ($1, $2)
    RETURNING *`;
  const result = await pool.query(query, [name, email]);
  return result.rows[0];
};

const getUsers = async () => {
  const { rows } = await pool.query("SELECT * FROM users");
  return rows;
};

export const userModel = {
  createUser,
  getUsers,
};
