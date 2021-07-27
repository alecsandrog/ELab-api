import { ICreatePhoneDTO } from "../dtos/ICreatePhoneDTO";
import { Phone } from "../infra/typeorm/entities/Phone";

interface IPhonesRepository {
  create(data: ICreatePhoneDTO): Promise<Phone>;
  findByIds(ids: string[]): Promise<Phone[]>;
}

export { IPhonesRepository };
