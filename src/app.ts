import express, { Express, Request, Response } from "express";
import { json } from "body-parser";
import { mainRouter } from "./routes";
import { createLogDataFromRequest } from "./models/requestLogData";

const app = express();

type ExpressApp = (
  req: Request,
  res: Response,
  next: () => void
) => void;

const requestLogger: ExpressApp = (req, res, next) => {
  console.log(createLogDataFromRequest(req))
  next();
};

const getPort = (): string => {
  if (process.env.PORT)
    return process.env.PORT
  else
    throw Error("Missing port environment variable")
}

const initExpress = (app: Express) => {
  app.use(json()); // Support JSON body
  app.use(requestLogger); //  set after body parser to enable body read
  app.use(mainRouter);

  app.listen(getPort(), () => {
    console.log(
      `OAuth Demo listening on port ${getPort()}`
    );
  });

  app.get("/", (req: Request, res: Response) => {
    res.send("Criptografía y Seguridad Informática: Grupo 9");
  });
};

try {
  initExpress(app);
} catch (err) {
  console.log(err);
  process.exit(1);
}
