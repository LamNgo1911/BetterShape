import { Request, Response } from "express";
import { messageService } from "../services/messages";

const createMessage = async (req: Request, res: Response) => {
  const { senderId, receiverId, messageText, sentAt } = req.body;

  try {
    const newMessage = await messageService.createMessage({
      senderId,
      receiverId,
      messageText,
      sentAt,
    });

    res.json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create message" });
  }
};

const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await messageService.getMessages();

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

const getASingleMessage = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const message = await messageService.getASingleMessage(id);

    res.json(message);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

const updateMessage = async (req: Request, res: Response) => {
  const { senderId, receiverId, messageText } = req.body;
  const { id } = req.params;
  try {
    const message = await messageService.updateMessage(id, {
      senderId,
      receiverId,
      messageText,
    });

    res.json(message);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

const deleteMessage = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const message = await messageService.deleteMessage(id);

    res.json(message);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

export const messageController = {
  createMessage,
  getMessages,
  getASingleMessage,
  updateMessage,
  deleteMessage,
};
