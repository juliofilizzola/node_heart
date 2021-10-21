import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageServices";
class CreateMessageService {
  async handle(req: Request, res: Response) {
    const { message } = req.body;
    
  };
};

export { CreateMessageService }