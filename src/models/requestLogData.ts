import {Request} from "express";

export type RequestLogData = {
  timestamp: string;
  path: string;
  body: string;
}

export const createLogDataFromRequest = (request: Request): RequestLogData => {
  return {
    timestamp: new Date().toISOString(),
    path: request.path,
    body: JSON.stringify(request.body, null, 2)
  }
}