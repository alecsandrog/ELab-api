import { inject, injectable } from "tsyringe";

import { ITypePhonesRepository } from "@modules/patients/repositories/ITypePhonesRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
}

@injectable()
class CreateTypePhoneUseCase {
  constructor(
    @inject("TypePhonesRepository")
    private typePhonesRepository: ITypePhonesRepository
  ) {}

  async execute({ name }: IRequest): Promise<void> {
    const typePhoneAlreadyExists = await this.typePhonesRepository.findByName(
      name
    );

    if (typePhoneAlreadyExists) {
      throw new AppError("Type of phone already exists!");
    }

    this.typePhonesRepository.create({ name });
  }
}

export { CreateTypePhoneUseCase };
