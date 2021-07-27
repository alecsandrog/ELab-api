import { inject, injectable } from "tsyringe";

import { Exam } from "@modules/orders/infra/typeorm/entities/Exam";
import { IExamsRepository } from "@modules/orders/repositories/IExamsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  code: number;
  cost: number;
  type_exam_id: string;
}

@injectable()
class CreateExamUseCase {
  constructor(
    @inject("ExamsRepository")
    private examRepository: IExamsRepository
  ) {}

  async execute({ name, code, cost, type_exam_id }: IRequest): Promise<Exam> {
    const examsAlreadyExists = await this.examRepository.findByCode(code);
    if (examsAlreadyExists) {
      throw new AppError("Exam code already exists!");
    }

    const exam = await this.examRepository.create({
      name,
      code,
      cost,
      type_exam_id,
    });
    return exam;
  }
}

export { CreateExamUseCase };
