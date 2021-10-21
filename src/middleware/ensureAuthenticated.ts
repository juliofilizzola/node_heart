import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

const JWT_SECRET = process.env.JWT_SECRET ||'5';
const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization;
  const messageError = "token.invalid";
  const messageError2 = "token.expired"

  if(!authToken) {
    return res.status(401).json({errorCode:  messageError});
  }
  const[, token] = authToken.split(" ");
  try {
    const { sub } = verify(token, JWT_SECRET) as IPayload;
    req.user_id = sub

  } catch (error) {

    return res.status(401).json({errorCode: messageError2});
  }

  return next();
};

export default ensureAuthenticated;