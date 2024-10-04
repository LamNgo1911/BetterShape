import { OrderInput, OrderUpdateInput } from "../utils/types";
import { pool } from "./db";

const createOrder = async ({
  userId,
  productId,
  orderDate,
  total,
}: OrderInput) => {
  const query = `INSERT INTO orders (userId, productId, orderDate, total) VALUES ($1, $2, $3, $4)
    RETURNING *`;

  const result = await pool.query(query, [userId, productId, orderDate, total]);
  return result.rows[0];
};

const getOrders = async () => {
  const { rows } = await pool.query("SELECT * FROM orders");

  return rows;
};

const getASingleOrder = async (id: string) => {
  const query = `SELECT * FROM orders WHERE id = $1`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateOrder = async (
  id: string,
  { userId, productId, orderDate, total }: OrderUpdateInput
) => {
  const query = `UPDATE orders SET name = $1, description = $2, price =
 $3, image = $4, stock = $5 WHERE id = $6 RETURNING *
 `;
  const result = await pool.query(query, [
    userId,
    productId,
    orderDate,
    total,
    id,
  ]);
  return result.rows[0];
};

const deleteOrder = async (id: string) => {
  const query = `DELETE FROM orders WHERE id = $1 RETURNING *`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const orderModel = {
  createOrder,
  getOrders,
  getASingleOrder,
  updateOrder,
  deleteOrder,
};
