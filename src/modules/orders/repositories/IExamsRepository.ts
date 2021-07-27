import { ICreateExamDTO } from "../dtos/ICreateExamDTO";
import { Exam } from "../infra/typeorm/entities/Exam";

interface IExamsRepository {
  list(): Promise<Exam[]>;
  findById(id: string): Promise<Exam>;
  findByCode(code: number): Promise<Exam>;
  create(data: ICreateExamDTO): Promise<Exam>;
  update(data: ICreateExamDTO, id: string): Promise<Exam>;
  delete(id: string): Promise<void>;
}

export { IExamsRepository };
