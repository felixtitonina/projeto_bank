import { ConnectOptions } from 'mongoose';
import DatabaseFactory from './factory';
import 'dotenv/config';
import colors from 'colors';

const databaseFactory = new DatabaseFactory();
const db = databaseFactory.createDatabaseInstance();
const DB_MONGO_DB = `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
console.log(colors.red('Test DB %s'), DB_MONGO_DB);
db.connect(DB_MONGO_DB, {} as ConnectOptions)
  .then(() => {
    console.log(colors.red('DB %s'), DB_MONGO_DB);
  })
  .catch((err) => console.log(err));

export default {
  db,
};
