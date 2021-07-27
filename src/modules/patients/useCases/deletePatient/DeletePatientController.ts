import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePatientUseCase } from "./DeletePatientUseCase";

class DeletePatientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deletePatientUseCase = container.resolve(DeletePatientUseCase);
    await deletePatientUseCase.execute(id);

    return res.sendStatus(204);
  }
}

export { DeletePatientController };
