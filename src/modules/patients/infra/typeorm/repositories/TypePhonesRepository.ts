import { getRepository, Repository } from "typeorm";

import { ICreateTypePhoneDTO } from "@modules/patients/dtos/ICreateTypePhoneDTO";
import { ITypePhonesRepository } from "@modules/patients/repositories/ITypePhonesRepository";

import { TypePhone } from "../entities/TypePhone";

class TypePhonesRepository implements ITypePhonesRepository {
  private repository: Repository<TypePhone>;

  constructor() {
    this.repository = getRepository(TypePhone);
  }

  async list(): Promise<TypePhone[]> {
    const typePhones = await this.repository.find();
    return typePhones;
  }

  async findById(id: string): Promise<TypePhone> {
    const typePhone = await this.repository.findOne({ id });
    return typePhone;
  }

  async findByName(name: string): Promise<TypePhone> {
    const typePhone = await this.repository.findOne({ name });
    return typePhone;
  }

  async create({ name }: ICreateTypePhoneDTO): Promise<void> {
    const typePhone = this.repository.create({
      name,
    });

    await this.repository.save(typePhone);
  }

  async update({ name }: ICreateTypePhoneDTO, id: string): Promise<TypePhone> {
    await this.repository.update(id, {
      name,
    });

    const typePhone = await this.repository.findOne(id);
    return typePhone;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { TypePhonesRepository };
