import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateExamUseCase } from "./CreateExamUseCase";

class CreateExamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, code, cost, type_exam_id } = req.body;

    const createExamUseCase = container.resolve(CreateExamUseCase);
    const exam = await createExamUseCase.execute({
      name,
      code,
      cost,
      type_exam_id,
    });
    return res.status(201).json(exam);
  }
}

export { CreateExamController };
