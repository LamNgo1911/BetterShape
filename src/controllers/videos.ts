import { Request, Response } from "express";
import { videoService } from "../services/videos";

const createVideo = async (req: Request, res: Response) => {
  const { program_id, title, description, url } = req.body;

  try {
    const newVideo = await videoService.createVideo({
      program_id,
      title,
      description,
      url,
    });

    res.json(newVideo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create video" });
  }
};

const getVideos = async (req: Request, res: Response) => {
  try {
    const videos = await videoService.getVideos();

    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
};

const getASingleVideo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const video = await videoService.getASingleVideo(id);

    res.json(video);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
};

const updateVideo = async (req: Request, res: Response) => {
  const { program_id, title, description, url } = req.body;
  const { id } = req.params;
  try {
    const video = await videoService.updateVideo(id, {
      program_id,
      title,
      description,
      url,
    });

    res.json(video);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
};

const deleteVideo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const video = await videoService.deleteVideo(id);

    res.json(video);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
};

export const videoController = {
  createVideo,
  getVideos,
  getASingleVideo,
  updateVideo,
  deleteVideo,
};
