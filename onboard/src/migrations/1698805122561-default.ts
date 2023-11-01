import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698805122561 implements MigrationInterface {
    name = 'Default1698805122561'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customers" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "document" text NOT NULL, "businessName" text, "statusRegister" text NOT NULL DEFAULT 'WAITING_DOCUMENT', CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phones" ("id" SERIAL NOT NULL, "ddd" numeric NOT NULL, "phone" numeric NOT NULL, "default" boolean NOT NULL, "idOnboard" text NOT NULL, CONSTRAINT "PK_30d7fc09a458d7a4d9471bda554" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" text NOT NULL, "neighborhood" text NOT NULL, "city" text NOT NULL, "state" text NOT NULL, "postalCode" text NOT NULL, "country" text NOT NULL, "default" boolean NOT NULL, "idOnboard" text NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "phones"`);
        await queryRunner.query(`DROP TABLE "customers"`);
    }

}
