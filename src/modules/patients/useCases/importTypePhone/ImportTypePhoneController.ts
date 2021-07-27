import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportTypePhoneUseCase } from "./ImportTypePhoneUseCase";

class ImportTypePhoneController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const importTypePhoneUseCase = container.resolve(ImportTypePhoneUseCase);

    await importTypePhoneUseCase.execute(file);

    return res.status(201).send();
  }
}

export { ImportTypePhoneController };
