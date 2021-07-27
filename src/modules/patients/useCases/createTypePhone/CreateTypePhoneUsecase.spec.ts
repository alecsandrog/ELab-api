import { TypePhonesRepositoryInMemory } from "@modules/patients/repositories/in-memory/TypePhonesRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateTypePhoneUseCase } from "./CreateTypeUseCase";

let createTypePhoneUseCase: CreateTypePhoneUseCase;
let typePhonesRepositoryInMemory: TypePhonesRepositoryInMemory;

describe("Create Type Phone", () => {
  beforeEach(() => {
    typePhonesRepositoryInMemory = new TypePhonesRepositoryInMemory();
    createTypePhoneUseCase = new CreateTypePhoneUseCase(
      typePhonesRepositoryInMemory
    );
  });
  it("should be able to create a new type of phone", async () => {
    const typePhone = {
      name: "name test",
    };
    await createTypePhoneUseCase.execute({
      name: typePhone.name,
    });

    const typePhoneCreated = await typePhonesRepositoryInMemory.findByName(
      typePhone.name
    );
    expect(typePhoneCreated).toHaveProperty("id");
  });
  it("should be able to create a new type of phone with name exists", async () => {
    expect(async () => {
      const typePhone = {
        name: "name test",
      };
      await createTypePhoneUseCase.execute({
        name: typePhone.name,
      });

      await createTypePhoneUseCase.execute({
        name: typePhone.name,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
