import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePatientUseCase } from "./CreatePatientUseCase";

class CreatePatientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      cpf,
      cns,
      city_cns,
      gender,
      address,
      complement,
      district,
      city_id,
    } = req.body;

    const createPatientUseCase = container.resolve(CreatePatientUseCase);

    const patient = await createPatientUseCase.execute({
      name,
      cpf,
      cns,
      city_cns,
      gender,
      address,
      complement,
      district,
      city_id,
    });

    return res.status(201).json(patient);
  }
}

export { CreatePatientController };
