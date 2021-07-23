import express, { Router } from "express";
import { oauthRedirectRouter } from "./oauthRedirect";

export const mainRouter = Router()

mainRouter.get("/login", (req, res) => {
    const clientId = process.env.CLIENT_ID;
    const port = process.env.PORT;
    const routePath = "index.html";
     
    res.render(routePath, {clientId: clientId, port: port});  
})

mainRouter.use("/user-info", express.static("./public/userInfo.html"));
mainRouter.use("/oauth/redirect", oauthRedirectRouter);

