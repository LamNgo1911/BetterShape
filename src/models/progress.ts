import { ProgressInput, ProgressUpdateInput } from "../utils/types";
import { pool } from "./db";

const createProgress = async ({
  userId,
  progress,
  program_id,
}: ProgressInput) => {
  const query = `INSERT INTO progress (userId, progress, program_id) VALUES ($1, $2, $3)
    RETURNING *`;

  const result = await pool.query(query, [userId, progress, program_id]);
  return result.rows[0];
};

const getProgress = async () => {
  const { rows } = await pool.query("SELECT * FROM progress");

  return rows;
};

const getProgressFromProgram = async (program_id: string) => {
  const query = `SELECT * FROM progress WHERE program_id = $1`;

  const { rows } = await pool.query(query, [program_id]);
  return rows;
};

const getASingleProgress = async (id: string) => {
  const query = `SELECT * FROM progress WHERE id = $1`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateProgress = async (
  id: string,
  { userId, progress, program_id }: ProgressUpdateInput
) => {
  const query = `UPDATE progress SET userId = $1, progress = $2, program_id =
 $3 WHERE id = $4 RETURNING *
 `;
  const result = await pool.query(query, [userId, progress, program_id, id]);
  return result.rows[0];
};

const deleteProgress = async (id: string) => {
  const query = `DELETE FROM progress WHERE id = $1 RETURNING *`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const progressModel = {
  createProgress,
  getProgress,
  getProgressFromProgram,
  getASingleProgress,
  updateProgress,
  deleteProgress,
};
