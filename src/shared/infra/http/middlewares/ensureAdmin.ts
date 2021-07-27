import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IPlayload {
  sub: string;
}

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const [, token] = authHeader.split(" ");
  const { sub: user_id } = verify(token, "dksad332l32k3k2l32") as IPlayload;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(user_id);

  if (!user.isAdmin) {
    throw new AppError("User isn't admin!");
  }
  return next();
}
