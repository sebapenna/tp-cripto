import express, { Router } from "express";
import { userRouter } from "./user";

export const mainRouter = Router()

// todo: cambiar los endpoints
mainRouter.use("/home", express.static("./public/index.html"));
mainRouter.use("/user", userRouter);

