import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageServices";
class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body;
    const { user_id } = req;
    const creteMessage = new CreateMessageService();

      const newMessage = await creteMessage.execute(message, user_id);

      res.json(newMessage);
  };
};

export { CreateMessageController }