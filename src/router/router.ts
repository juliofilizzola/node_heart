import { Router } from "express";
import { AuthenticateUserController } from '../controller/AuthenticateUserController';
import ensureAuthenticated from "../middleware/ensureAuthenticated";
import { CreateMessageController } from "../controller/CreateMessageController";

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);
router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
);

export { router }