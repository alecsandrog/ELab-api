import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTypeExamUseCase } from "./UpdateTypeExamUseCase";

class UpdateTypeExamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const { id } = req.params;

    const updateTypeExamUseCase = container.resolve(UpdateTypeExamUseCase);
    const exam = await updateTypeExamUseCase.execute({ name }, id);

    return res.status(201).json(exam);
  }
}

export { UpdateTypeExamController };
