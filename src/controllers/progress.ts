import { Request, Response } from "express";
import { progressService } from "../services/progress";

const createProgress = async (req: Request, res: Response) => {
  const { userId, progress, program_id } = req.body;

  try {
    const newProgress = await progressService.createProgress({
      userId,
      progress,
      program_id,
    });

    res.json(newProgress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create progress" });
  }
};

const getProgress = async (req: Request, res: Response) => {
  try {
    const progress = await progressService.getProgress();

    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch progress" });
  }
};

const getASingleProgress = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const progress = await progressService.getASingleProgress(id);

    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch progress" });
  }
};

const updateProgress = async (req: Request, res: Response) => {
  const { userId, progress: A_single_progress, program_id } = req.body;
  const { id } = req.params;
  try {
    const progress = await progressService.updateProgress(id, {
      userId,
      progress: A_single_progress,
      program_id,
    });

    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch progress" });
  }
};

const deleteProgress = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const progress = await progressService.deleteProgress(id);

    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch progress" });
  }
};

export const progressController = {
  createProgress,
  getProgress,
  getASingleProgress,
  updateProgress,
  deleteProgress,
};
