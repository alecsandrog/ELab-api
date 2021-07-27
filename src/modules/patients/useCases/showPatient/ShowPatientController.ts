import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowPatientUseCase } from "./ShowPatientUseCase";

class ShowPatientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showPatientUseCase = container.resolve(ShowPatientUseCase);
    const patient = await showPatientUseCase.execute(id);

    return res.json(patient);
  }
}

export { ShowPatientController };
