import { inject, injectable } from "tsyringe";

import { TypeExam } from "@modules/orders/infra/typeorm/entities/TypeExam";
import { ITypeExamsRepository } from "@modules/orders/repositories/ITypeExamsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
}
@injectable()
class UpdateTypeExamUseCase {
  constructor(
    @inject("TypeExamsRepository")
    private typeExamsRepository: ITypeExamsRepository
  ) {}

  async execute({ name }: IRequest, id: string): Promise<TypeExam> {
    const typeExamExists = await this.typeExamsRepository.findById(id);
    if (!typeExamExists) {
      throw new AppError("Type exam don't exists!");
    }

    const typeExam = await this.typeExamsRepository.update(
      {
        name,
      },
      id
    );
    return typeExam;
  }
}

export { UpdateTypeExamUseCase };
