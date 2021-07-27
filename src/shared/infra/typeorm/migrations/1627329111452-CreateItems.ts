import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateItems1627329111452 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "items",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "exam_date",
            type: "date",
          },
          {
            name: "exam_id",
            type: "uuid",
          },
          {
            name: "clinic_id",
            type: "uuid",
          },
          {
            name: "exam_request_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "items",
      new TableForeignKey({
        name: "FKExamItem",
        referencedTableName: "exams",
        referencedColumnNames: ["id"],
        columnNames: ["exam_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
    await queryRunner.createForeignKey(
      "items",
      new TableForeignKey({
        name: "FKClinicItem",
        referencedTableName: "clinics",
        referencedColumnNames: ["id"],
        columnNames: ["clinic_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
    await queryRunner.createForeignKey(
      "items",
      new TableForeignKey({
        name: "FKRequestItem",
        referencedTableName: "exam_requests",
        referencedColumnNames: ["id"],
        columnNames: ["exam_request_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("items", "FKExamItem");
    await queryRunner.dropForeignKey("items", "FKClinicItem");
    await queryRunner.dropForeignKey("items", "FKRequestItem");
    await queryRunner.dropTable("items");
  }
}
