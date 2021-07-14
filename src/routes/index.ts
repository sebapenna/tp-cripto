import express, { Router } from "express";
import { oauthRedirectRouter } from "./oauthRedirect";

export const mainRouter = Router()

mainRouter.use("/home", express.static("./public/index.html"));
mainRouter.use("/oauth/redirect", oauthRedirectRouter);

