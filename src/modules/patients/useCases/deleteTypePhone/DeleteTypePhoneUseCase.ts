import { inject, injectable } from "tsyringe";

import { ITypePhonesRepository } from "@modules/patients/repositories/ITypePhonesRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DeleteTypePhoneUseCase {
  constructor(
    @inject("TypePhonesRepository")
    private typePhoneRepository: ITypePhonesRepository
  ) {}

  async execute(id: string): Promise<void> {
    const typePhoneExists = await this.typePhoneRepository.findById(id);
    if (!typePhoneExists) {
      throw new AppError("Type exam don't found!");
    }

    await this.typePhoneRepository.delete(id);
  }
}

export { DeleteTypePhoneUseCase };
