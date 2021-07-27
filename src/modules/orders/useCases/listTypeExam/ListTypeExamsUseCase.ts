import { inject, injectable } from "tsyringe";

import { TypeExam } from "@modules/orders/infra/typeorm/entities/TypeExam";
import { ITypeExamsRepository } from "@modules/orders/repositories/ITypeExamsRepository";

@injectable()
class ListTypeExamsUseCase {
  constructor(
    @inject("TypeExamsRepository")
    private typeExamsRepository: ITypeExamsRepository
  ) {}

  async execute(): Promise<TypeExam[]> {
    const typeExams = await this.typeExamsRepository.list();
    return typeExams;
  }
}

export { ListTypeExamsUseCase };
