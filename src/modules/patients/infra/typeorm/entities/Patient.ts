import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { City } from "./City";
import { Phone } from "./Phone";

@Entity("patients")
class Patient {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  cns: string;

  @Column()
  city_cns: string;

  @Column()
  gender: string;

  @Column()
  address: string;

  @Column()
  complement: string;

  @Column()
  district: string;

  @ManyToOne(() => City)
  @JoinColumn({ name: "city_id" })
  city: City;

  @Column()
  city_id: string;

  @ManyToMany(() => Phone)
  @JoinTable({
    name: "phones_patients",
    joinColumns: [{ name: "patient_id" }],
    inverseJoinColumns: [{ name: "phone_id" }],
  })
  phones: Phone[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Patient };
