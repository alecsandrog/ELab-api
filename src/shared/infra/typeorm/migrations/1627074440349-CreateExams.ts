import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateExams1627074440349 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "exams",
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
            name: "cost",
            type: "numeric(7,2)",
          },
          {
            name: "type_exam_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKTypeExam",
            referencedTableName: "type_exams",
            referencedColumnNames: ["id"],
            columnNames: ["type_exam_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("exams");
  }
}
