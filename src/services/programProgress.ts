import { progressModel } from "../models/programProgress";
import { ProgressInput, ProgressUpdateInput } from "../utils/types";

const createProgress = async ({
  userId,
  progress,
  program_id,
}: ProgressInput) => {
  return await progressModel.createProgress({
    userId,
    progress,
    program_id,
  });
};

const getProgresss = async () => {
  return await progressModel.getProgress();
};

const getASingleProgress = async (id: string) => {
  return await progressModel.getASingleProgress(id);
};

const updateProgress = async (
  id: string,
  { userId, progress, program_id }: ProgressUpdateInput
) => {
  return await progressModel.updateProgress(id, {
    userId, progress, program_id
  });
};

const deleteProgress = async (id: string) => {
  return await progressModel.deleteProgress(id);
};

export const progressService = {
  createProgress,
  getProgresss,
  getASingleProgress,
  updateProgress,
  deleteProgress,
};
