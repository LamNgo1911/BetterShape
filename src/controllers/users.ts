import { Request, Response } from "express";
import { userService } from "../services/users";

const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const newUser = await userService.createUser({ name, email });
    res.json(newUser);
  } catch (error) {
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

module.exports = { createUser, getUsers };
