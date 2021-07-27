import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePhoneUseCase } from "./CreatePhoneUseCase";

class CreatePhoneController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { number, type_phone_id } = req.body;

    const createPhoneUseCase = container.resolve(CreatePhoneUseCase);

    const phone = await createPhoneUseCase.execute({
      number,
      type_phone_id,
    });
    return res.status(201).json(phone);
  }
}

export { CreatePhoneController };
