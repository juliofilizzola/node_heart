import { Request, Response } from "express";
import { AuthenticateUserServices } from "../services/AuthenticateUserServices";
class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;
    const service = new AuthenticateUserServices();
    try {
      const result = await service.execute(code);
      return res.json(result);
    } catch (err) {
      return  res.json({error: err});
    }

  };
};

export { AuthenticateUserController }