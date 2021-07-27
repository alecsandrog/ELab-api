import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTypeExamUseCase } from "./DeleteTypeExamUseCase";

class DeleteTypeExamController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteTypeExamUseCase = container.resolve(DeleteTypeExamUseCase);
    await deleteTypeExamUseCase.execute(id);

    return res.sendStatus(204);
  }
}

export { DeleteTypeExamController };
