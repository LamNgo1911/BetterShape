import express from "express";
import { userController } from "../controllers/users";
const router = express.Router();

router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);

export default router;
