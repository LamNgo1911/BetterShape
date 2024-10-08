import { Request, Response } from "express";
import { coachingSessionService } from "../services/coachingSessions";

const createCoachingSession = async (req: Request, res: Response) => {
  const { sessionDate, coachId, clientId } = req.body;

  try {
    const newCoachingSession =
      await coachingSessionService.createCoachingSession({
        sessionDate,
        coachId,
        clientId,
      });

    res.json(newCoachingSession);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create coachingSession" });
  }
};

const getCoachingSessions = async (req: Request, res: Response) => {
  try {
    const coachingSessions = await coachingSessionService.getCoachingSessions();

    res.json(coachingSessions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch coachingSessions" });
  }
};

const getASingleCoachingSession = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const coachingSession =
      await coachingSessionService.getASingleCoachingSession(id);

    res.json(coachingSession);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch coachingSessions" });
  }
};

const updateCoachingSession = async (req: Request, res: Response) => {
  const { sessionDate, coachId, clientId } = req.body;
  const { id } = req.params;
  try {
    const coachingSession = await coachingSessionService.updateCoachingSession(
      id,
      {
        sessionDate,
        coachId,
        clientId,
      }
    );

    res.json(coachingSession);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch coachingSessions" });
  }
};

const deleteCoachingSession = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const coachingSession = await coachingSessionService.deleteCoachingSession(
      id
    );

    res.json(coachingSession);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch coachingSessions" });
  }
};

export const coachingSessionController = {
  createCoachingSession,
  getCoachingSessions,
  getASingleCoachingSession,
  updateCoachingSession,
  deleteCoachingSession,
};
