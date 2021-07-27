import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreatePhonesPatients1627013517496 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "phones_patients",
        columns: [
          {
            name: "patient_id",
            type: "uuid",
          },
          {
            name: "phone_id",
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
      "phones_patients",
      new TableForeignKey({
        name: "FKPhonePatient",
        referencedTableName: "phones",
        referencedColumnNames: ["id"],
        columnNames: ["phone_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
    await queryRunner.createForeignKey(
      "phones_patients",
      new TableForeignKey({
        name: "FKPatientPhone",
        referencedTableName: "patients",
        referencedColumnNames: ["id"],
        columnNames: ["patient_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("phones_patients", "FKPhonePatient");
    await queryRunner.dropForeignKey("phones_patients", "FKPatientPhone");
    await queryRunner.dropTable("phones_patients");
  }
}
