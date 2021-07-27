import { inject, injectable } from "tsyringe";

import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DeletePatientUseCase {
  constructor(
    @inject("PatientsRepository")
    private patientRepository: IPatientsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const patientAlreadyExists = await this.patientRepository.findById(id);
    if (!patientAlreadyExists) {
      throw new AppError("Patient don't exists!");
    }

    await this.patientRepository.delete(id);
  }
}

export { DeletePatientUseCase };
