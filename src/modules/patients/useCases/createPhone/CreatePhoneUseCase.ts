import { injectable, inject } from "tsyringe";

import { Phone } from "@modules/patients/infra/typeorm/entities/Phone";
import { IPhonesRepository } from "@modules/patients/repositories/IPhonesRepository";

interface IRequest {
  number: string;
  type_phone_id: string;
}
@injectable()
class CreatePhoneUseCase {
  constructor(
    @inject("PhonesRepository")
    private phonesRepository: IPhonesRepository
  ) {}

  async execute({ number, type_phone_id }: IRequest): Promise<Phone> {
    const phone = await this.phonesRepository.create({
      number,
      type_phone_id,
    });
    return phone;
  }
}

export { CreatePhoneUseCase };
