import { Request, Response } from "express";
import { notificationService } from "../services/notifications";

const createNotification = async (req: Request, res: Response) => {
  const { userId, notificationText, createAt } = req.body;

  try {
    const newNotification = await notificationService.createNotification({
      userId,
      notificationText,
      createAt,
    });

    res.json(newNotification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create notification" });
  }
};

const getNotifications = async (req: Request, res: Response) => {
  try {
    const notifications = await notificationService.getNotifications();

    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
};

const getASingleNotification = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const notification = await notificationService.getASingleNotification(id);

    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
};

const updateNotification = async (req: Request, res: Response) => {
  const { userId, notificationText, createAt } = req.body;
  const { id } = req.params;
  try {
    const notification = await notificationService.updateNotification(id, {
      userId,
      notificationText,
    });

    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
};

const deleteNotification = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const notification = await notificationService.deleteNotification(id);

    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
};

export const notificationController = {
  createNotification,
  getNotifications,
  getASingleNotification,
  updateNotification,
  deleteNotification,
};
