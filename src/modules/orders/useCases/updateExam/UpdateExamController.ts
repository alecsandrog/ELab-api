import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateExamUseCase } from "./UpdateExamUseCase";

class UpdateExamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, code, cost, type_exam_id } = req.body;
    const { id } = req.params;

    const updateExamUseCase = container.resolve(UpdateExamUseCase);
    const exam = await updateExamUseCase.execute(
      { name, code, cost, type_exam_id },
      id
    );

    return res.status(201).json(exam);
  }
}

export { UpdateExamController };
