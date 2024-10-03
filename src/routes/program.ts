import express from "express";
import { programController } from "../controllers/programs";
const router = express.Router();

router.post("/programs", programController.createProgram);
router.get("/programs", programController.getPrograms);
router.get("/programs/:id", programController.getASingleProgram);
router.patch("/programs/:id", programController.updateProgram);
router.delete("/programs/:id", programController.deleteProgram);

export default router;
