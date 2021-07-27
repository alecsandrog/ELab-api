import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateTypePhoneUseCase } from "./UpdateTypePhoneUseCase";

class UpdateTypePhoneController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const { id } = req.params;

    const updatePhoneUseCase = container.resolve(UpdateTypePhoneUseCase);
    const phone = await updatePhoneUseCase.execute({ name }, id);

    return res.status(201).json(phone);
  }
}

export { UpdateTypePhoneController };
