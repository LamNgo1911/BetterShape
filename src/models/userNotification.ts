import { NotificationInput, NotificationUpdateInput } from "../utils/types";
import { pool } from "./db";

const createNotification = async ({
  userId,
  notificationText,
  createAt,
}: NotificationInput) => {
  const query = `INSERT INTO notifications (userId, notificationText, createAt) VALUES ($1, $2, $3)
    RETURNING *`;

  const result = await pool.query(query, [userId, notificationText, createAt]);
  return result.rows[0];
};

const getNotifications = async () => {
  const { rows } = await pool.query("SELECT * FROM notifications");

  return rows;
};

const getASingleNotification = async (id: string) => {
  const query = `SELECT * FROM notifications WHERE id = $1`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateNotification = async (
  id: string,
  { userId, notificationText }: NotificationUpdateInput
) => {
  const query = `UPDATE notifications 
  SET userId = $1, notificationText = $2
  WHERE id = $3
  RETURNING *
  `;

  const result = await pool.query(query, [userId, notificationText, id]);
  return result.rows[0];
};

const deleteNotification = async (id: string) => {
  const query = `DELETE FROM notifications WHERE id = $1 RETURNING *`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const notificationModel = {
  createNotification,
  getNotifications,
  getASingleNotification,
  updateNotification,
  deleteNotification,
};
