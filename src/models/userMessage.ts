import { MessageInput, MessageUpdateInput } from "../utils/types";
import { pool } from "./db";

const createMessage = async ({
  senderId,
  receiverId,
  messageText,
  sentAt,
}: MessageInput) => {
  const query = `INSERT INTO messages (senderId, receiverId, messageText, sentAt) VALUES ($1, $2, $3, $4)
    RETURNING *`;

  const result = await pool.query(query, [
    senderId,
    receiverId,
    messageText,
    sentAt,
  ]);
  return result.rows[0];
};

const getMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");

  return rows;
};

const getASingleMessage = async (id: string) => {
  const query = `SELECT * FROM messages WHERE id = $1`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateMessage = async (
  id: string,
  { senderId, receiverId, messageText }: MessageUpdateInput
) => {
  const query = `UPDATE messages 
  SET senderId = $1, receiverId = $2, messageText = $3, 
  WHERE id = $4
  RETURNING *
  `;

  const result = await pool.query(query, [senderId, receiverId, messageText]);
  return result.rows[0];
};

const deleteMessage = async (id: string) => {
  const query = `DELETE FROM messages WHERE id = $1 RETURNING *`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const messageModel = {
  createMessage,
  getMessages,
  getASingleMessage,
  updateMessage,
  deleteMessage,
};
