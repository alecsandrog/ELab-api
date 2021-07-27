import { ICreatePatientDTO } from "@modules/patients/dtos/ICreatePatientDTO";
import { Patient } from "@modules/patients/infra/typeorm/entities/Patient";

import { IPatientsRepository } from "../IPatientsRepository";

class PatientsRepositoryInMemory implements IPatientsRepository {
  update(data: ICreatePatientDTO, id: string): Promise<Patient> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  show(id: string): Promise<Patient> {
    throw new Error("Method not implemented.");
  }
  patients: Patient[] = [];
  async create({
    name,
    cpf,
    cns,
    city_cns,
    gender,
    address,
    complement,
    district,
    city_id,
  }: ICreatePatientDTO): Promise<Patient> {
    const patient = new Patient();

    Object.assign(patient, {
      name,
      cpf,
      cns,
      city_cns,
      gender,
      address,
      complement,
      district,
      city_id,
    });
    this.patients.push(patient);
    return patient;
  }

  findById(id: string): Promise<Patient> {
    throw new Error("Method not implemented.");
  }
}
export { PatientsRepositoryInMemory };
