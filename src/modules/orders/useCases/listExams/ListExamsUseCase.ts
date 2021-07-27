import { inject, injectable } from "tsyringe";

import { Exam } from "@modules/orders/infra/typeorm/entities/Exam";
import { IExamsRepository } from "@modules/orders/repositories/IExamsRepository";

@injectable()
class ListExamsUseCase {
  constructor(
    @inject("ExamsRepository")
    private examsRepository: IExamsRepository
  ) {}
  async execute(): Promise<Exam[]> {
    const exams = await this.examsRepository.list();
    return exams;
  }
}
export { ListExamsUseCase };
