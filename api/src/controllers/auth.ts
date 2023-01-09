import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { user } from "../../data";
import config from "../config";

export const authenticate = async (req: Request, res: Response) => {
  const { name, lastname } = req.body || {};
  const { name: userName, lastname: userLastname } = user || {};

  if (name && lastname && name === userName && lastname === userLastname) {
    const token = jwt.sign({ name, lastname }, config.SECRET_KEY, {
      expiresIn: "2 days",
    });
    return res.status(200).json({ token });
  }
  return res.status(401).json({ error: "Unauthorized" });
};

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization: token } = req.headers || "";
  if (token && token.startsWith("Bearer ")) {
    const bearerToken = token.slice(7);
    try {
      jwt.verify(bearerToken, config.SECRET_KEY) && next();
    } catch (error) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
