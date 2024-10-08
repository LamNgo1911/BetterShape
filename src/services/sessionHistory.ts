import { sessionHistoryModel } from "../models/sessionHistory";
import { SessionHistoryInput, SessionHistoryUpdateInput } from "../utils/types";

const createSessionHistory = async ({
  sessionId,
  notes,
}: SessionHistoryInput) => {
  return await sessionHistoryModel.createSessionHistory({
    sessionId,
    notes,
  });
};

const getSessionHistory = async () => {
  return await sessionHistoryModel.getSessionHistory();
};

const getASingleSessionHistory = async (id: string) => {
  return await sessionHistoryModel.getASingleSessionHistory(id);
};

const updateSessionHistory = async (
  id: string,
  { sessionId, notes }: SessionHistoryUpdateInput
) => {
  return await sessionHistoryModel.updateSessionHistory(id, {
    sessionId,
    notes,
  });
};

const deleteSessionHistory = async (id: string) => {
  return await sessionHistoryModel.deleteSessionHistory(id);
};

export const sessionHistoryService = {
  createSessionHistory,
  getSessionHistory,
  getASingleSessionHistory,
  updateSessionHistory,
  deleteSessionHistory,
};
