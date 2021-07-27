import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Clinic } from "./Clinic";
import { Exam } from "./Exam";
import { ExamRequest } from "./ExamRequest";

@Entity("items")
class Item {
  @PrimaryColumn()
  id: string;

  @Column()
  exam_date: Date;

  @Column()
  exam_id: string;

  @ManyToOne(() => Exam)
  @JoinColumn({ name: "exam_id" })
  exam: Exam;

  @Column()
  clinic_id: string;

  @ManyToOne(() => Clinic)
  @JoinColumn({ name: "clinic_id" })
  clinic: Clinic;

  @Column()
  exam_request_id: string;

  @ManyToOne(() => ExamRequest)
  @JoinColumn({ name: "exam_request_id" })
  exam_request: ExamRequest;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Item };
