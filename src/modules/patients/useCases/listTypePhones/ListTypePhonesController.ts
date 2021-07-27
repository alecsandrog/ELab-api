import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTypePhonesUseCase } from "./ListTypePhonesUseCase";

class ListTypePhonesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listTypePhoneUseCase = container.resolve(ListTypePhonesUseCase);
    const all = await listTypePhoneUseCase.execute();

    return res.json(all);
  }
}

export { ListTypePhonesController };
