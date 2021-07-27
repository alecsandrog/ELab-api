import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteExamUseCase } from "./DeleteExamUseCase";

class DeleteExamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteExamUseCase = container.resolve(DeleteExamUseCase);
    await deleteExamUseCase.execute(id);

    return res.sendStatus(204);
  }
}

export { DeleteExamController };
