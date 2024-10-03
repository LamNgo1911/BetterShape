import express, { Application } from "express";

const app: Application = express();

import userRouter from "./routes/user";

//
app.use(express.json());

// Routes
app.use("/api/v1", userRouter);

export default app;
