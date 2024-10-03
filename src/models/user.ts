import { UserInput, UserUpdateInput } from "../utils/types";
import { pool } from "./db";

const createUser = async ({ name, email }: UserInput) => {
  const query = `INSERT INTO users (name, email) VALUES ($1, $2)
    RETURNING *`;

  const result = await pool.query(query, [name, email]);
  return result.rows[0];
};

const getUsers = async () => {
  const { rows } = await pool.query("SELECT * FROM users");

  return rows;
};

const getASingleUser = async (id: string) => {
  const query = `SELECT * FROM users WHERE id = $1`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateUser = async ({ id, name }: UserUpdateInput) => {
  const query = `UPDATE users 
  SET name = $1
  WHERE id = $2
  RETURNING *
  `;

  const result = await pool.query(query, [name, id]);
  return result.rows[0];
};

const deleteUser = async (id: string) => {
  const query = `DELETE FROM users WHERE id = $1 RETURNING *`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const userModel = {
  createUser,
  getUsers,
  getASingleUser,
  updateUser,
  deleteUser,
};
