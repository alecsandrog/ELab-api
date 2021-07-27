import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListExamsUseCase } from "./ListExamsUseCase";

class ListExamsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listExamsUseCase = container.resolve(ListExamsUseCase);
    const all = await listExamsUseCase.execute();
    return res.json(all);
  }
}

export { ListExamsController };
