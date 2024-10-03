import { Request, Response } from "express";
import { programService } from "../services/programs";

const createProgram = async (req: Request, res: Response) => {
  const { name, description, price, image } = req.body;

  try {
    const newProgram = await programService.createProgram({
      name,
      description,
      price,
      image,
    });

    res.json(newProgram);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create program" });
  }
};

const getPrograms = async (req: Request, res: Response) => {
  try {
    const programs = await programService.getPrograms();

    res.json(programs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch programs" });
  }
};

const getASingleProgram = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const program = await programService.getASingleProgram(id);

    res.json(program);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch programs" });
  }
};

const updateProgram = async (req: Request, res: Response) => {
  const { name, description, price, image, stock } = req.body;
  const { id } = req.params;
  try {
    const program = await programService.updateProgram(id, {
      name,
      description,
      price,
      image,
    });

    res.json(program);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch programs" });
  }
};

const deleteProgram = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const program = await programService.deleteProgram(id);

    res.json(program);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch programs" });
  }
};

export const programController = {
  createProgram,
  getPrograms,
  getASingleProgram,
  updateProgram,
  deleteProgram,
};
