import { getRepository, Repository } from "typeorm";

import { ICreatePatientDTO } from "@modules/patients/dtos/ICreatePatientDTO";
import { IPatientsRepository } from "@modules/patients/repositories/IPatientsRepository";

import { Patient } from "../entities/Patient";

class PatientsRepository implements IPatientsRepository {
  private repository: Repository<Patient>;
  constructor() {
    this.repository = getRepository(Patient);
  }

  async findById(id: string): Promise<Patient> {
    const patient = await this.repository.findOne(id);
    return patient;
  }

  async show(id: string): Promise<Patient> {
    const patient = await this.repository.findOne({
      where: { id },
      relations: ["city", "phones"],
    });

    return patient;
  }

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
    phones,
    id,
  }: ICreatePatientDTO): Promise<Patient> {
    const patient = this.repository.create({
      name,
      cpf,
      cns,
      city_cns,
      gender,
      address,
      complement,
      district,
      city_id,
      phones,
      id,
    });

    await this.repository.save(patient);

    return patient;
  }

  async update(
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
    }: ICreatePatientDTO,
    id: string
  ): Promise<Patient> {
    await this.repository.update(id, {
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

    const patient = await this.repository.findOne(id);
    return patient;
  }

  async delete(id: string): Promise<void> {
    const patient = await this.repository.findOne(id);
    await this.repository.remove(patient);
  }
}

export { PatientsRepository };
