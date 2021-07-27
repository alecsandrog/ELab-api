import { ICreateTypePhoneDTO } from "@modules/patients/dtos/ICreateTypePhoneDTO";
import { TypePhone } from "@modules/patients/infra/typeorm/entities/TypePhone";

import { ITypePhonesRepository } from "../ITypePhonesRepository";

class TypePhonesRepositoryInMemory implements ITypePhonesRepository {
  typePhones: TypePhone[] = [];

  async findById(id: string): Promise<TypePhone> {
    const typePhone = this.typePhones.find((typePhone) => typePhone.id === id);
    return typePhone;
  }
  async update({ name }: ICreateTypePhoneDTO, id: string): Promise<TypePhone> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async findByName(name: string): Promise<TypePhone> {
    const typePhone = this.typePhones.find(
      (typePhone) => typePhone.name === name
    );
    return typePhone;
  }
  async list(): Promise<TypePhone[]> {
    const all = this.typePhones;
    return all;
  }
  async create({ name }: ICreateTypePhoneDTO): Promise<void> {
    const typePhone = new TypePhone();

    Object.assign(typePhone, {
      name,
    });

    this.typePhones.push(typePhone);
  }
}

export { TypePhonesRepositoryInMemory };
