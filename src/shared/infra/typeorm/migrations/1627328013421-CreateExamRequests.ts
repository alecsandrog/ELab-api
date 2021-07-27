import { query } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateExamRequests1627328013421 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "exam_requests",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "request_date",
            type: "date",
          },
          {
            name: "authorization_date",
            type: "date",
          },
          {
            name: "patient_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "null",
          },
        ],
        foreignKeys: [
          {
            name: "FKPatient",
            referencedTableName: "patients",
            referencedColumnNames: ["id"],
            columnNames: ["patient_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("exam_requests");
  }
}
