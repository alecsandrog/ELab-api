import { inject, injectable } from "tsyringe";

import { TypePhone } from "@modules/patients/infra/typeorm/entities/TypePhone";
import { ITypePhonesRepository } from "@modules/patients/repositories/ITypePhonesRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
}
@injectable()
class UpdateTypePhoneUseCase {
  constructor(
    @inject("TypePhonesRepository")
    private typePhonesRepository: ITypePhonesRepository
  ) {}

  async execute({ name }: IRequest, id: string): Promise<TypePhone> {
    const typePhoneExists = await this.typePhonesRepository.findById(id);
    if (!typePhoneExists) {
      throw new AppError("Type of phone don't exists!");
    }

    const typePhone = await this.typePhonesRepository.update(
      {
        name,
      },
      id
    );
    return typePhone;
  }
}

export { UpdateTypePhoneUseCase };
