import { ICreatePatientDTO } from "../dtos/ICreatePatientDTO";
import { Patient } from "../infra/typeorm/entities/Patient";

interface IPatientsRepository {
  create(data: ICreatePatientDTO): Promise<Patient>;
  show(id: string): Promise<Patient>;
  findById(id: string): Promise<Patient>;
  update(data: ICreatePatientDTO, id: string): Promise<Patient>;
  delete(id: string): Promise<void>;
}

export { IPatientsRepository };
