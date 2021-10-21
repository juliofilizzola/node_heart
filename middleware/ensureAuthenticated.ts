import { Request, Response, NextFunction } from "express";

const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authToken;
  const messageError = "Token.invalid";

  if(!authToken) {
    return res.status(401).json({errorCode:  messageError});
  }

  next();
};

export default ensureAuthenticated;