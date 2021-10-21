import { Router } from "express";
import { AuthenticateUserController } from '../controller/AuthenticateUserController';
import ensureAuthenticated from "../middleware/ensureAuthenticated";
import { CreateMessageController } from "../controller/CreateMessageController";
import { GetLast3MessagesController } from "../controller/GetLast3MessagesController";

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);
router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
);
router.get('/messages/last3', new GetLast3MessagesController().handle);

export { router }