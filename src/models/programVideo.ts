import { VideoInput, VideoUpdateInput } from "../utils/types";
import { pool } from "./db";

const createVideo = async ({
  program_id,
  title,
  description,
  url,
}: VideoInput) => {
  const query = `INSERT INTO videos (program_id, title, description, url) VALUES ($1, $2, $3, $4)
    RETURNING *`;

  const result = await pool.query(query, [program_id, title, description, url]);
  return result.rows[0];
};

const getVideos = async () => {
  const { rows } = await pool.query("SELECT * FROM videos");

  return rows;
};

const getVideosFromProgram = async (program_id: string) => {
  const query = `SELECT * FROM videos WHERE program_id = $1`;

  const { rows } = await pool.query(query, [program_id]);
  return rows;
};

const getASingleVideo = async (id: string) => {
  const query = `SELECT * FROM videos WHERE id = $1`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateVideo = async (
  id: string,
  { program_id, title, description, url }: VideoUpdateInput
) => {
  const query = `UPDATE videos SET program_id = $1, title = $2, description =
 $3, url = $4 WHERE id = $5 RETURNING *
 `;
  const result = await pool.query(query, [
    program_id,
    title,
    description,
    url,
    id,
  ]);
  return result.rows[0];
};

const deleteVideo = async (id: string) => {
  const query = `DELETE FROM videos WHERE id = $1 RETURNING *`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const videoModel = {
  createVideo,
  getVideos,
  getVideosFromProgram,
  getASingleVideo,
  updateVideo,
  deleteVideo,
};
