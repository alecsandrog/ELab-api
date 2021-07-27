import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Patient } from "@modules/patients/infra/typeorm/entities/Patient";

@Entity("exam_requests")
class ExamRequest {
  @PrimaryColumn()
  id: string;

  @Column()
  request_date: Date;

  @Column()
  authorization_date: Date;

  @Column()
  patient_id: string;

  @ManyToOne(() => Patient)
  @JoinColumn({ name: "patient_id" })
  patient = Patient;

  @CreateDateColumn()
  createad_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { ExamRequest };
