import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("cities")
class City {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  state_id: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { City };
