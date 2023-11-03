import { MigrationInterface, QueryRunner } from 'typeorm';

export class Default1699031758619 implements MigrationInterface {
  name = 'Default1699031758619';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "idOnboard" TO "idCustomer"`);
    await queryRunner.query(`ALTER TABLE "phones" RENAME COLUMN "idOnboard" TO "idCustomer"`);
    await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "idCustomer"`);
    await queryRunner.query(`ALTER TABLE "addresses" ADD "idCustomer" numeric NOT NULL`);
    await queryRunner.query(`ALTER TABLE "phones" DROP COLUMN "idCustomer"`);
    await queryRunner.query(`ALTER TABLE "phones" ADD "idCustomer" numeric NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "phones" DROP COLUMN "idCustomer"`);
    await queryRunner.query(`ALTER TABLE "phones" ADD "idCustomer" text NOT NULL`);
    await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "idCustomer"`);
    await queryRunner.query(`ALTER TABLE "addresses" ADD "idCustomer" text NOT NULL`);
    await queryRunner.query(`ALTER TABLE "phones" RENAME COLUMN "idCustomer" TO "idOnboard"`);
    await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "idCustomer" TO "idOnboard"`);
  }
}
