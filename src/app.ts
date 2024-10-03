import express, { Application } from "express";

const app: Application = express();

import userRouter from "./routes/user";
import productRouter from "./routes/product";
import programRouter from "./routes/program";

//
app.use(express.json());

// Routes
app.use("/api/v1", userRouter);
app.use("/api/v1", productRouter);
app.use("/api/v1", programRouter);

export default app;
