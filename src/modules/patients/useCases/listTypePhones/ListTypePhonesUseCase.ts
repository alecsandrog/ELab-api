import { inject, injectable } from "tsyringe";

import { TypePhone } from "@modules/patients/infra/typeorm/entities/TypePhone";
import { ITypePhonesRepository } from "@modules/patients/repositories/ITypePhonesRepository";

@injectable()
class ListTypePhonesUseCase {
  constructor(
    @inject("TypePhonesRepository")
    private typePhonesRepository: ITypePhonesRepository
  ) {}

  async execute(): Promise<TypePhone[]> {
    const typePhones = await this.typePhonesRepository.list();

    return typePhones;
  }
}

export { ListTypePhonesUseCase };
