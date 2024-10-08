import { Request, Response } from "express";
import { orderService } from "../services/orders";

const createOrder = async (req: Request, res: Response) => {
  const { userId, productId, orderDate, total } = req.body;

  try {
    const newOrder = await orderService.createOrder({
      userId,
      productId,
      orderDate,
      total,
    });

    res.json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create order" });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getOrders();

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

const getASingleOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await orderService.getASingleOrder(id);

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

const updateOrder = async (req: Request, res: Response) => {
  const { userId, productId, orderDate, total } = req.body;
  const { id } = req.params;
  try {
    const order = await orderService.updateOrder(id, {
      userId,
      productId,
      orderDate,
      total,
    });

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await orderService.deleteOrder(id);

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

export const orderController = {
  createOrder,
  getOrders,
  getASingleOrder,
  updateOrder,
  deleteOrder,
};
