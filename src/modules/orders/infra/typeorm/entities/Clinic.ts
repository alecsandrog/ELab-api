import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { City } from "@modules/patients/infra/typeorm/entities/City";

@Entity("clinics")
class Clinic {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  code: number;

  @Column()
  address: string;

  @Column()
  district: string;

  @Column()
  complement: string;

  @Column()
  city_id: string;

  @ManyToOne(() => City)
  @JoinColumn({ name: "city_id" })
  city = City;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Clinic };
