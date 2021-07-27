import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { TypeExam } from "./TypeExam";

@Entity("exams")
class Exam {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  code: number;

  @Column()
  cost: number;

  @Column()
  type_exam_id: string;

  @ManyToOne(() => TypeExam)
  @JoinColumn({ name: "type_exam_id" })
  type_exam: TypeExam;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Exam };
