import { PatientsRepositoryInMemory } from "@modules/patients/repositories/in-memory/PatientsRepositoryInMemory";

import { CreatePatientUseCase } from "./CreatePatientUseCase";

let createPatientUseCase: CreatePatientUseCase;
let patientsRepositoryInMemory: PatientsRepositoryInMemory;

describe("Create patient", () => {
  beforeEach(() => {
    patientsRepositoryInMemory = new PatientsRepositoryInMemory();
    createPatientUseCase = new CreatePatientUseCase(patientsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    await createPatientUseCase.execute({
      name: "Name patient",
      cpf: "cpf patient",
      cns: "cns patient",
      city_cns: "city cns",
      gender: "f",
      address: "street 11",
      complement: "complement",
      district: "bairro",
      city_id: "city",
    });
  });
});
