import {
  CoachingSessionInput,
  CoachingSessionUpdateInput,
} from "../utils/types";
import { pool } from "./db";

const createCoachingSession = async ({
  sessionDate,
  coachId,
  clientId,
}: CoachingSessionInput) => {
  const query = `INSERT INTO coachingSessions (sessionDate, coachId, clientId) VALUES ($1, $2, $3)
    RETURNING *`;

  const result = await pool.query(query, [sessionDate, coachId, clientId]);
  return result.rows[0];
};

const getCoachingSessions = async () => {
  const { rows } = await pool.query("SELECT * FROM coachingSessions");

  return rows;
};

const getASingleCoachingSession = async (id: string) => {
  const query = `SELECT * FROM coachingSessions WHERE id = $1`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateCoachingSession = async (
  id: string,
  { sessionDate, coachId, clientId }: CoachingSessionUpdateInput
) => {
  const query = `UPDATE coachingSessions 
  SET senderId = $1, receiverId = $2, coachingSessionText = $3, 
  WHERE id = $4
  RETURNING *
  `;

  const result = await pool.query(query, [sessionDate, coachId, clientId]);
  return result.rows[0];
};

const deleteCoachingSession = async (id: string) => {
  const query = `DELETE FROM coachingSessions WHERE id = $1 RETURNING *`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const coachingSessionModel = {
  createCoachingSession,
  getCoachingSessions,
  getASingleCoachingSession,
  updateCoachingSession,
  deleteCoachingSession,
};
