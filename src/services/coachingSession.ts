import { coachingSessionModel } from "../models/coachingSession";
import {
  CoachingSessionInput,
  CoachingSessionUpdateInput,
} from "../utils/types";

const createCoachingSession = async ({
  sessionDate,
  coachId,
  clientId,
}: CoachingSessionInput) => {
  return await coachingSessionModel.createCoachingSession({
    sessionDate,
    coachId,
    clientId,
  });
};

const getCoachingSessions = async () => {
  return await coachingSessionModel.getCoachingSessions();
};

const getASingleCoachingSession = async (id: string) => {
  return await coachingSessionModel.getASingleCoachingSession(id);
};

const updateCoachingSession = async (
  id: string,
  { sessionDate, coachId, clientId }: CoachingSessionUpdateInput
) => {
  return await coachingSessionModel.updateCoachingSession(id, {
    sessionDate,
    coachId,
    clientId,
  });
};

const deleteCoachingSession = async (id: string) => {
  return await coachingSessionModel.deleteCoachingSession(id);
};

export const coachingSessionService = {
  createCoachingSession,
  getCoachingSessions,
  getASingleCoachingSession,
  updateCoachingSession,
  deleteCoachingSession,
};
