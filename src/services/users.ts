import { userModel } from "../models/user";
import { UserInput, UserUpdateInput } from "../utils/types";

const createUser = async ({ name, email }: UserInput) => {
  return await userModel.createUser({ name, email });
};

const getUsers = async () => {
  return await userModel.getUsers();
};

const getASingleUser = async (id: string) => {
  return await userModel.getASingleUser(id);
};

const updateUser = async ({ id, name }: UserUpdateInput) => {
  return await userModel.updateUser({ id, name });
};

const deleteUser = async (id: string) => {
  return await userModel.deleteUser(id);
};

export const userService = {
  createUser,
  getUsers,
  getASingleUser,
  updateUser,
  deleteUser,
};
