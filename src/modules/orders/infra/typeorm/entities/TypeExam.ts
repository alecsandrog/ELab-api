import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("type_exams")
class TypeExam {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { TypeExam };
