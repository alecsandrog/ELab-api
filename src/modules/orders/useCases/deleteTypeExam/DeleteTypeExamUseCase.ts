import { inject, injectable } from "tsyringe";

import { ITypeExamsRepository } from "@modules/orders/repositories/ITypeExamsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DeleteTypeExamUseCase {
  constructor(
    @inject("TypeExamsRepository")
    private typeExamRepository: ITypeExamsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const typeExamExists = await this.typeExamRepository.findById(id);
    if (!typeExamExists) {
      throw new AppError("Type exam don't found!");
    }

    await this.typeExamRepository.delete(id);
  }
}

export { DeleteTypeExamUseCase };
