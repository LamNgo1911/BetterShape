import { videoModel } from "../models/video";
import { VideoInput, VideoUpdateInput } from "../utils/types";

const createVideo = async ({
  program_id,
  title,
  description,
  url,
}: VideoInput) => {
  return await videoModel.createVideo({ program_id, title, description, url });
};

const getVideos = async () => {
  return await videoModel.getVideos();
};

const getASingleVideo = async (id: string) => {
  return await videoModel.getASingleVideo(id);
};

const updateVideo = async (
  id: string,
  { program_id, title, description, url }: VideoUpdateInput
) => {
  return await videoModel.updateVideo(id, {
    program_id,
    title,
    description,
    url,
  });
};

const deleteVideo = async (id: string) => {
  return await videoModel.deleteVideo(id);
};

export const videoService = {
  createVideo,
  getVideos,
  getASingleVideo,
  updateVideo,
  deleteVideo,
};
