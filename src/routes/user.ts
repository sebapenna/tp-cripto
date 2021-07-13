import {Router} from "express";

export const userRouter = Router();

// todo: evitar que se pueda acceder sin autorizacion
// todo: cambiar nombre de user?
userRouter.post("/", (req, res) => {
  res.send("OAuth success!");
})