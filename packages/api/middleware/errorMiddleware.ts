import { Request, Response, NextFunction } from "express";

const INTERNAL_SERVER_ERROR_MESSAGE = "Internal Server Error";

function errorHandler(
  error: Error,
  _: Request,
  response: Response,
  _: NextFunction,
): void {
  console.error(error.stack);
  response.status(500).json({ error: INTERNAL_SERVER_ERROR_MESSAGE });
}

export default errorHandler;
