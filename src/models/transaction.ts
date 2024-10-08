import { TransactionInput, TransactionUpdateInput } from "../utils/types";
import { pool } from "./db";

const createTransaction = async ({
  orderId,
  userId,
  amount,
  transactionDate,
}: TransactionInput) => {
  const query = `INSERT INTO transactions (orderId, userId, amount, transactionDate) VALUES ($1, $2, $3, $4)
    RETURNING *`;

  const result = await pool.query(query, [
    orderId,
    userId,
    amount,
    transactionDate,
  ]);
  return result.rows[0];
};

const getTransactions = async () => {
  const { rows } = await pool.query("SELECT * FROM transactions");

  return rows;
};

const getASingleTransaction = async (id: string) => {
  const query = `SELECT * FROM transactions WHERE id = $1`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateTransaction = async (
  id: string,
  { orderId, userId, amount }: TransactionUpdateInput
) => {
  const query = `UPDATE transactions SET orderId = $1, userId = $2, amount =
 $3 WHERE id = $4 RETURNING *
 `;
  const result = await pool.query(query, [orderId, userId, amount, id]);
  return result.rows[0];
};

const deleteTransaction = async (id: string) => {
  const query = `DELETE FROM transactions WHERE id = $1 RETURNING *`;

  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const transactionModel = {
  createTransaction,
  getTransactions,
  getASingleTransaction,
  updateTransaction,
  deleteTransaction,
};
