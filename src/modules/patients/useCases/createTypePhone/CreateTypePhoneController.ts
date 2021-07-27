import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTypePhoneUseCase } from "./CreateTypeUseCase";

class CreateTypePhoneController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const createTypePhoneUseCase = container.resolve(CreateTypePhoneUseCase);

    await createTypePhoneUseCase.execute({ name });

    return res.status(201).send();
  }
}

export { CreateTypePhoneController };
