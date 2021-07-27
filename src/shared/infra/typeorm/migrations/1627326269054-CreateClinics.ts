import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClinics1627326269054 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clinics",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "code",
            type: "integer",
            isUnique: true,
          },
          {
            name: "address",
            type: "varchar",
          },
          {
            name: "district",
            type: "varchar",
          },
          {
            name: "complement",
            type: "varchar",
          },
          {
            name: "city_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKCity",
            referencedTableName: "cities",
            referencedColumnNames: ["id"],
            columnNames: ["city_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clinics");
  }
}
