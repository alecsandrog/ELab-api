import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTypePhoneUseCase } from "./DeleteTypePhoneUseCase";

class DeleteTypePhoneController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteTypePhoneUseCase = container.resolve(DeleteTypePhoneUseCase);
    await deleteTypePhoneUseCase.execute(id);

    return res.sendStatus(204);
  }
}

export { DeleteTypePhoneController };
