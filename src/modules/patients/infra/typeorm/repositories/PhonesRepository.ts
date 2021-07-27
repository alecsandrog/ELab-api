import { getRepository, Repository } from "typeorm";

import { ICreatePhoneDTO } from "@modules/patients/dtos/ICreatePhoneDTO";
import { IPhonesRepository } from "@modules/patients/repositories/IPhonesRepository";

import { Phone } from "../entities/Phone";

class PhonesRepository implements IPhonesRepository {
  repository: Repository<Phone>;
  constructor() {
    this.repository = getRepository(Phone);
  }

  async create({ number, type_phone_id }: ICreatePhoneDTO): Promise<Phone> {
    const phone = this.repository.create({
      number,
      type_phone_id,
    });

    await this.repository.save(phone);
    return phone;
  }

  async findByIds(ids: string[]): Promise<Phone[]> {
    const phones = await this.repository.findByIds(ids);
    return phones;
  }
}

export { PhonesRepository };
