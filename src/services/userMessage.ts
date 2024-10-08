import { messageModel } from "../models/userMessage";
import { MessageInput, MessageUpdateInput } from "../utils/types";

const createMessage = async ({
  senderId,
  receiverId,
  messageText,
  sentAt,
}: MessageInput) => {
  return await messageModel.createMessage({
    senderId,
    receiverId,
    messageText,
    sentAt,
  });
};

const getMessages = async () => {
  return await messageModel.getMessages();
};

const getASingleMessage = async (id: string) => {
  return await messageModel.getASingleMessage(id);
};

const updateMessage = async (
  id: string,
  { senderId, receiverId, messageText }: MessageUpdateInput
) => {
  return await messageModel.updateMessage(id, {
    senderId,
    receiverId,
    messageText,
  });
};

const deleteMessage = async (id: string) => {
  return await messageModel.deleteMessage(id);
};

export const messageService = {
  createMessage,
  getMessages,
  getASingleMessage,
  updateMessage,
  deleteMessage,
};
