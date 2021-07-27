import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePatients1626974917448 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "patients",
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
            name: "cpf",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "cns",
            type: "varchar",
          },
          {
            name: "city_cns",
            type: "varchar",
          },
          {
            name: "gender",
            type: "varchar(1)",
          },
          {
            name: "address",
            type: "varchar",
          },
          {
            name: "complement",
            type: "varchar",
          },
          {
            name: "district",
            type: "varchar",
          },
          {
            name: "city_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
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
    await queryRunner.dropTable("patients");
  }
}
