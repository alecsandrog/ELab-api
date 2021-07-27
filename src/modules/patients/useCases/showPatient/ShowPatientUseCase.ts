import { inject, injectable } from "tsyringe";

import { Patient } from "@modules/patients/infra/typeorm/entities/Patient";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";

@injectable()
class ShowPatientUseCase {
  constructor(
    @inject("PatientsRepository")
    private typePhonesRepository: IPatientsRepository
  ) {}

  async execute(id: string): Promise<Patient> {
    const patient = await this.typePhonesRepository.show(id);

    return patient;
  }
}

export { ShowPatientUseCase };
