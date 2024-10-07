import { SessionHistoryInput, SessionHistoryUpdateInput } from "../utils/types";
import { pool } from "./db";

const createSessionHistory = async ({
  sessionId,
  notes,
}: SessionHistoryInput) => {
  const query = `INSERT INTO sessionHistory (sessionId, notes) VALUES ($1, $2)
    RETURNING *`;

  const result = await pool.query(query, [sessionId, notes]);
  return result.rows[0];
};

const getSessionHistory = async () => {
  const { rows } = await pool.query("SELECT * FROM sessionHistory");

  return rows;
};

const getASingleSessionHistory = async (id: string) => {
  const query = `SELECT * FROM sessionHistory WHERE id = $1`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateSessionHistory = async (
  id: string,
  { sessionId, notes }: SessionHistoryUpdateInput
) => {
  const query = `UPDATE sessionHistory 
  SET sessionId = $1, notes = $2
  WHERE id = $3
  RETURNING *
  `;

  const result = await pool.query(query, [sessionId, notes]);
  return result.rows[0];
};

const deleteSessionHistory = async (id: string) => {
  const query = `DELETE FROM sessionHistory WHERE id = $1 RETURNING *`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const sessionHistoryModel = {
  createSessionHistory,
  getSessionHistory,
  getASingleSessionHistory,
  updateSessionHistory,
  deleteSessionHistory,
};
