import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTypeExamsUseCase } from "./ListTypeExamsUseCase";

class ListTypeExamsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listTypeExamUseCase = container.resolve(ListTypeExamsUseCase);
    const all = await listTypeExamUseCase.execute();

    return res.json(all);
  }
}

export { ListTypeExamsController };
