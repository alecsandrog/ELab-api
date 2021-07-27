import { ICreateTypePhoneDTO } from "../dtos/ICreateTypePhoneDTO";
import { TypePhone } from "../infra/typeorm/entities/TypePhone";

interface ITypePhonesRepository {
  list(): Promise<TypePhone[]>;
  findById(id: string): Promise<TypePhone>;
  findByName(name: string): Promise<TypePhone>;
  create({ name }: ICreateTypePhoneDTO): Promise<void>;
  update({ name }: ICreateTypePhoneDTO, id: string): Promise<TypePhone>;
  delete(id: string): Promise<void>;
}

export { ITypePhonesRepository };
