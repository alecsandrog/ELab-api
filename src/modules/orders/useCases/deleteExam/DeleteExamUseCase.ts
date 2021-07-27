import { inject, injectable } from "tsyringe";

import { IExamsRepository } from "@modules/orders/repositories/IExamsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DeleteExamUseCase {
  constructor(
    @inject("ExamsRepository")
    private examRepository: IExamsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const examAlreadyExists = await this.examRepository.findById(id);
    if (!examAlreadyExists) {
      throw new AppError("Exam don't exists!");
    }

    await this.examRepository.delete(id);
  }
}
export { DeleteExamUseCase };
