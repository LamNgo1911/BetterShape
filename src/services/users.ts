import { userModel } from "../models/user";
import { userInput } from "../utils/types";

const createUser = async ({ name, email }: userInput) => {
  return userModel.createUser({ name, email });
};

const getUsers = async () => {
  return getUsers();
};

export const userService = {
    createUser,
    getUsers
}