import { inject, injectable } from "tsyringe";

import { Patient } from "@modules/patients/infra/typeorm/entities/Patient";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";

interface IRequest {
  name: string;
  cpf: string;
  cns: string;
  city_cns: string;
  gender: string;
  address: string;
  complement: string;
  district: string;
  city_id: string;
}

@injectable()
class CreatePatientUseCase {
  constructor(
    @inject("PatientsRepository")
    private patientsRepository: IPatientsRepository
  ) {}
  async execute({
    name,
    cpf,
    cns,
    city_cns,
    gender,
    address,
    complement,
    district,
    city_id,
  }: IRequest): Promise<Patient> {
    const patient = await this.patientsRepository.create({
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
    return patient;
  }
}

export { CreatePatientUseCase };
