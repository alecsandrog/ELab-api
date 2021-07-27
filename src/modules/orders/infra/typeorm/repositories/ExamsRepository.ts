import { getRepository, Repository } from "typeorm";

import { ICreateExamDTO } from "@modules/orders/dtos/ICreateExamDTO";
import { IExamsRepository } from "@modules/orders/repositories/IExamsRepository";

import { Exam } from "../entities/Exam";

class ExamsRepository implements IExamsRepository {
  repository: Repository<Exam>;

  constructor() {
    this.repository = getRepository(Exam);
  }

  async list(): Promise<Exam[]> {
    const exams = await this.repository.find({ relations: ["type_exam"] });
    return exams;
  }

  async findById(id: string): Promise<Exam> {
    const exam = await this.repository.findOne({ id });
    return exam;
  }

  async findByCode(code: number): Promise<Exam> {
    const exam = await this.repository.findOne({ code });
    return exam;
  }

  async create({
    name,
    code,
    cost,
    type_exam_id,
  }: ICreateExamDTO): Promise<Exam> {
    const exam = this.repository.create({
      name,
      code,
      cost,
      type_exam_id,
    });
    await this.repository.save(exam);
    return exam;
  }

  async update(
    { name, code, cost, type_exam_id }: ICreateExamDTO,
    id: string
  ): Promise<Exam> {
    await this.repository.update(id, {
      name,
      code,
      cost,
      type_exam_id,
    });

    const exam = await this.repository.findOne(id);
    return exam;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { ExamsRepository };
