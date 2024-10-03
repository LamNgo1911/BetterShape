import { Request, Response } from "express";
import { userService } from "../services/users";

const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const newUser = await userService.createUser({ name, email });

    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const getASingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.getASingleUser(id);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { id } = req.params;
  try {
    const user = await userService.updateUser(id, { name });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await userService.deleteUser(id);

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const userController = {
  createUser,
  getUsers,
  getASingleUser,
  updateUser,
  deleteUser,
};
