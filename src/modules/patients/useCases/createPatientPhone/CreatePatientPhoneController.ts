import { Request, response, Response } from "express";
import { container } from "tsyringe";

import { CreatePatientPhoneUseCase } from "./CreatePatientPhoneUseCase";

class CreatePatientPhoneController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { phones_id } = req.body;

    const createPatientPhoneUseCase = container.resolve(
      CreatePatientPhoneUseCase
    );
    const phones = await createPatientPhoneUseCase.execute({
      patient_id: id,
      phones_id,
    });
    return res.json(phones);
  }
}

export { CreatePatientPhoneController };
