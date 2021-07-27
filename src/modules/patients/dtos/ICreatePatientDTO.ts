import { Phone } from "../infra/typeorm/entities/Phone";

interface ICreatePatientDTO {
  name: string;
  cpf: string;
  cns: string;
  city_cns: string;
  gender: string;
  address: string;
  complement: string;
  district: string;
  city_id: string;
  phones?: Phone[];
  id?: string;
}

export { ICreatePatientDTO };
