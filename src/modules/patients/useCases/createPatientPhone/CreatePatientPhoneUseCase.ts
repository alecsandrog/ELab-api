import { inject, injectable } from "tsyringe";

import { Patient } from "@modules/patients/infra/typeorm/entities/Patient";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";
import { IPhonesRepository } from "@modules/patients/repositories/IPhonesRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  patient_id: string;
  phones_id: string[];
}

@injectable()
class CreatePatientPhoneUseCase {
  constructor(
    @inject("PatientsRepository")
    private patientRepository: IPatientsRepository,
    @inject("PhonesRepository")
    private phoneRepository: IPhonesRepository
  ) {}
  async execute({ patient_id, phones_id }: IRequest): Promise<Patient> {
    const patientExists = await this.patientRepository.findById(patient_id);

    if (!patientExists) {
      throw new AppError("Patient does not exists!");
    }

    const phones = await this.phoneRepository.findByIds(phones_id);

    patientExists.phones = phones;

    await this.patientRepository.create(patientExists);

    return patientExists;
  }
}

export { CreatePatientPhoneUseCase };
