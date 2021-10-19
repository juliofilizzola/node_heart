import { Request, Response } from "express";
import { AuthenticateUserServices } from "../services/AuthenticateUserServices";
class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const service = await AuthenticateUserServices();
  };
};

export { AuthenticateUserController }