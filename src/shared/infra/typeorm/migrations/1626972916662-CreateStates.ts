import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStates1626972916662 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "states",
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
            name: "uf",
            type: "varchar",
          },
          {
            name: "country_id",
            type: "uuid",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FKCountry",
            referencedTableName: "countries",
            referencedColumnNames: ["id"],
            columnNames: ["country_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("states");
  }
}
