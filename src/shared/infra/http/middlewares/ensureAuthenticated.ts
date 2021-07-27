import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IPlayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, "dksad332l32k3k2l32") as IPlayload;
    const usersRepository = new UsersRepository();
    const users = await usersRepository.findById(user_id);

    if (!users) {
      throw new AppError("User does not exists!", 401);
    }

    next();
  } catch {
    throw new AppError("Invalid missing", 401);
  }
}
