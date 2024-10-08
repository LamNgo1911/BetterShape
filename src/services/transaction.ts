import { transactionModel } from "../models/transaction";
import { TransactionInput, TransactionUpdateInput } from "../utils/types";

const createTransaction = async ({
  orderId,
  userId,
  amount,
  transactionDate,
}: TransactionInput) => {
  return await transactionModel.createTransaction({
    orderId,
    userId,
    amount,
    transactionDate,
  });
};

const getTransactions = async () => {
  return await transactionModel.getTransactions();
};

const getASingleTransaction = async (id: string) => {
  return await transactionModel.getASingleTransaction(id);
};

const updateTransaction = async (
  id: string,
  { orderId, userId, amount }: TransactionUpdateInput
) => {
  return await transactionModel.updateTransaction(id, {
    orderId,
    userId,
    amount,
  });
};

const deleteTransaction = async (id: string) => {
  return await transactionModel.deleteTransaction(id);
};

export const transactionService = {
  createTransaction,
  getTransactions,
  getASingleTransaction,
  updateTransaction,
  deleteTransaction,
};
