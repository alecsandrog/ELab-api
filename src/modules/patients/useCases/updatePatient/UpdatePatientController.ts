import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePatientUseCase } from "./UpdatePatientUseCase";

class UpdatePatientController {
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
    const { id } = req.params;

    const updatePatientUseCase = container.resolve(UpdatePatientUseCase);
    const patient = await updatePatientUseCase.execute(
      {
        name,
        cpf,
        cns,
        city_cns,
        gender,
        address,
        complement,
        district,
        city_id,
      },
      id
    );

    return res.status(201).json(patient);
  }
}

export { UpdatePatientController };
