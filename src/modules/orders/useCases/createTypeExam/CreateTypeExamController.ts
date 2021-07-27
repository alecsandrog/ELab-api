import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTypeExamUseCase } from "./CreateTypeExamUseCase";

class CreateTypeExamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const createTypeExamUseCase = container.resolve(CreateTypeExamUseCase);

    await createTypeExamUseCase.execute({ name });

    return res.status(201).send();
  }
}

export { CreateTypeExamController };
