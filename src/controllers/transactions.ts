import { Request, Response } from "express";
import { transactionService } from "../services/transactions";

const createTransaction = async (req: Request, res: Response) => {
  const { orderId, userId, amount, transactionDate } = req.body;

  try {
    const newTransaction = await transactionService.createTransaction({
      orderId,
      userId,
      amount,
      transactionDate,
    });

    res.json(newTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create transaction" });
  }
};

const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await transactionService.getTransactions();

    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

const getASingleTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const transaction = await transactionService.getASingleTransaction(id);

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

const updateTransaction = async (req: Request, res: Response) => {
  const { orderId, userId, amount } = req.body;
  const { id } = req.params;
  try {
    const transaction = await transactionService.updateTransaction(id, {
      orderId,
      userId,
      amount,
    });

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

const deleteTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const transaction = await transactionService.deleteTransaction(id);

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};

export const transactionController = {
  createTransaction,
  getTransactions,
  getASingleTransaction,
  updateTransaction,
  deleteTransaction,
};
