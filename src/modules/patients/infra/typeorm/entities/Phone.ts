import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { TypePhone } from "./TypePhone";

@Entity("phones")
class Phone {
  @PrimaryColumn()
  id: string;

  @Column()
  number: string;

  @ManyToOne(() => TypePhone)
  @JoinColumn({ name: "type_phone_id" })
  type_phone: TypePhone;

  @Column()
  type_phone_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Phone };
