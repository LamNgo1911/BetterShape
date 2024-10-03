import { ProgramInput, ProgramUpdateInput } from "../utils/types";
import { pool } from "./db";

const createProgram = async ({
  name,
  description,
  price,
  image,
}: ProgramInput) => {
  const query = `INSERT INTO programs (name, description, price, image) VALUES ($1, $2, $3, $4)
    RETURNING *`;

  const result = await pool.query(query, [name, description, price, image]);
  return result.rows[0];
};

const getPrograms = async () => {
  const { rows } = await pool.query("SELECT * FROM programs");

  return rows;
};

const getASingleProgram = async (id: string) => {
  const query = `SELECT * FROM programs WHERE id = $1`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateProgram = async (
  id: string,
  { name, description, price, image }: ProgramUpdateInput
) => {
  const query = `UPDATE programs SET name = $1, description = $2, price =
 $3, image = $4 WHERE id = $5 RETURNING *
 `;
  const result = await pool.query(query, [name, description, price, image, id]);
  return result.rows[0];
};

const deleteProgram = async (id: string) => {
  const query = `DELETE FROM programs WHERE id = $1 RETURNING *`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const programModel = {
  createProgram,
  getPrograms,
  getASingleProgram,
  updateProgram,
  deleteProgram,
};
