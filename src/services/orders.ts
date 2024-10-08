import { orderModel } from "../models/order";
import { OrderInput, OrderUpdateInput } from "../utils/types";

const createOrder = async ({
  userId,
  productId,
  orderDate,
  total,
}: OrderInput) => {
  return await orderModel.createOrder({
    userId,
    productId,
    orderDate,
    total,
  });
};

const getOrders = async () => {
  return await orderModel.getOrders();
};

const getASingleOrder = async (id: string) => {
  return await orderModel.getASingleOrder(id);
};

const updateOrder = async (
  id: string,
  { userId, productId, orderDate, total }: OrderUpdateInput
) => {
  return await orderModel.updateOrder(id, {
    userId,
    productId,
    orderDate,
    total,
  });
};

const deleteOrder = async (id: string) => {
  return await orderModel.deleteOrder(id);
};

export const orderService = {
  createOrder,
  getOrders,
  getASingleOrder,
  updateOrder,
  deleteOrder,
};
