import { programModel } from "../models/program";
import { ProgramInput, ProgramUpdateInput } from "../utils/types";

const createProgram = async ({
  name,
  description,
  price,
  image,
}: ProgramInput) => {
  return await programModel.createProgram({
    name,
    description,
    price,
    image,
  });
};

const getPrograms = async () => {
  return await programModel.getPrograms();
};

const getASingleProgram = async (id: string) => {
  return await programModel.getASingleProgram(id);
};

const updateProgram = async (
  id: string,
  { name, description, price, image }: ProgramUpdateInput
) => {
  return await programModel.updateProgram(id, {
    name,
    description,
    price,
    image,
  });
};

const deleteProgram = async (id: string) => {
  return await programModel.deleteProgram(id);
};

export const programService = {
  createProgram,
  getPrograms,
  getASingleProgram,
  updateProgram,
  deleteProgram,
};
