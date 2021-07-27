import { getRepository, Repository } from "typeorm";

import { ICreateTypeExamDTO } from "@modules/orders/dtos/ICreateTypeExamDTO";
import { ITypeExamsRepository } from "@modules/orders/repositories/ITypeExamsRepository";

import { TypeExam } from "../entities/TypeExam";

class TypeExamsRepository implements ITypeExamsRepository {
  private repository: Repository<TypeExam>;

  constructor() {
    this.repository = getRepository(TypeExam);
  }

  async list(): Promise<TypeExam[]> {
    const typeExams = await this.repository.find();
    return typeExams;
  }

  async findById(id: string): Promise<TypeExam> {
    const typeExam = await this.repository.findOne({ id });
    return typeExam;
  }

  async findByName(name: string): Promise<TypeExam> {
    const typeExam = await this.repository.findOne({ name });
    return typeExam;
  }

  async create({ name }: ICreateTypeExamDTO): Promise<void> {
    const typeExam = this.repository.create({
      name,
    });
    await this.repository.save(typeExam);
  }

  async update({ name }: ICreateTypeExamDTO, id: string): Promise<TypeExam> {
    await this.repository.update(id, {
      name,
    });

    const typeExam = await this.repository.findOne(id);
    return typeExam;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { TypeExamsRepository };
