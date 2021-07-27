import { inject, injectable } from "tsyringe";

import { Patient } from "@modules/patients/infra/typeorm/entities/Patient";
import { Phone } from "@modules/patients/infra/typeorm/entities/Phone";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";
import { AppError } from "@shared/errors/AppError";

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
  phones?: Phone[];
  id?: string;
}

@injectable()
class UpdatePatientUseCase {
  constructor(
    @inject("PatientsRepository")
    private patientRepository: IPatientsRepository
  ) {}

  async execute(
    {
      name,
      cpf,
      cns,
      city_cns,
      gender,
      address,
      complement,
      district,
      city_id,
    }: IRequest,
    id: string
  ): Promise<Patient> {
    const patientExists = await this.patientRepository.findById(id);
    if (!patientExists) {
      throw new AppError("Patient don't exists!");
    }

    const patient = await this.patientRepository.update(
      {
        name,
        cpf,
        cns,
        city_cns,
        gender,
        address,
        complement,
        district,
        city_id,
      },
      id
    );
    return patient;
  }
}

export { UpdatePatientUseCase };
