import { inject, injectable } from "tsyringe";

import { ITypeExamsRepository } from "@modules/orders/repositories/ITypeExamsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
}

@injectable()
class CreateTypeExamUseCase {
  constructor(
    @inject("TypeExamsRepository")
    private typeExamsRepository: ITypeExamsRepository
  ) {}

  async execute({ name }: IRequest): Promise<void> {
    const typeExamAlreadyExists = await this.typeExamsRepository.findByName(
      name
    );

    if (typeExamAlreadyExists) {
      throw new AppError("Type of exam already exists");
    }

    this.typeExamsRepository.create({ name });
  }
}

export { CreateTypeExamUseCase };
