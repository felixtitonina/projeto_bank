import { DataSource } from 'typeorm';
import 'reflect-metadata';
import 'dotenv/config';
import path from 'path';
const port = process.env.DB_PORT as number | undefined;
const dirNamePath = path.join(__dirname, '../../');
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [`${dirNamePath}/**/entities/*.{ts,js}`],
  subscribers: [],
  migrations: [`${dirNamePath}/**/migrations/*.{ts,js}`],
});
