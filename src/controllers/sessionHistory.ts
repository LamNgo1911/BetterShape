import { Request, Response } from "express";
import { sessionHistoryService } from "../services/sessionHistory";

const createSessionHistory = async (req: Request, res: Response) => {
  const { sessionId, notes } = req.body;

  try {
    const newSessionHistory = await sessionHistoryService.createSessionHistory({
      sessionId,
      notes,
    });

    res.json(newSessionHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create sessionHistory" });
  }
};

const getSessionHistory = async (req: Request, res: Response) => {
  try {
    const sessionHistory = await sessionHistoryService.getSessionHistory();

    res.json(sessionHistory);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sessionHistory" });
  }
};

const getASingleSessionHistory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const sessionHistory = await sessionHistoryService.getASingleSessionHistory(
      id
    );

    res.json(sessionHistory);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sessionHistory" });
  }
};

const updateSessionHistory = async (req: Request, res: Response) => {
  const { sessionId, notes } = req.body;
  const { id } = req.params;
  try {
    const sessionHistory = await sessionHistoryService.updateSessionHistory(
      id,
      {
        sessionId,
        notes,
      }
    );

    res.json(sessionHistory);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sessionHistory" });
  }
};

const deleteSessionHistory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const sessionHistory = await sessionHistoryService.deleteSessionHistory(id);

    res.json(sessionHistory);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sessionHistory" });
  }
};

export const sessionHistoryController = {
  createSessionHistory,
  getSessionHistory,
  getASingleSessionHistory,
  updateSessionHistory,
  deleteSessionHistory,
};
