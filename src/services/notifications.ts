import { notificationModel } from "../models/notification";
import { NotificationInput, NotificationUpdateInput } from "../utils/types";

const createNotification = async ({
  userId,
  notificationText,
  createAt,
}: NotificationInput) => {
  return await notificationModel.createNotification({
    userId,
    notificationText,
    createAt,
  });
};

const getNotifications = async () => {
  return await notificationModel.getNotifications();
};

const getASingleNotification = async (id: string) => {
  return await notificationModel.getASingleNotification(id);
};

const updateNotification = async (
  id: string,
  { userId, notificationText }: NotificationUpdateInput
) => {
  return await notificationModel.updateNotification(id, {
    userId,
    notificationText,
  });
};

const deleteNotification = async (id: string) => {
  return await notificationModel.deleteNotification(id);
};

export const notificationService = {
  createNotification,
  getNotifications,
  getASingleNotification,
  updateNotification,
  deleteNotification,
};
