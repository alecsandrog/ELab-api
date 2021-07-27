import { ICreateTypeExamDTO } from "../dtos/ICreateTypeExamDTO";
import { TypeExam } from "../infra/typeorm/entities/TypeExam";

interface ITypeExamsRepository {
  list(): Promise<TypeExam[]>;
  findById(id: string): Promise<TypeExam>;
  findByName(name: string): Promise<TypeExam>;
  create({ name }: ICreateTypeExamDTO): Promise<void>;
  update({ name }: ICreateTypeExamDTO, id: string): Promise<TypeExam>;
  delete(id: string): Promise<void>;
}

export { ITypeExamsRepository };
