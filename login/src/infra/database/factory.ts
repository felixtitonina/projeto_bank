import { Mongoose } from 'mongoose';

export default class DATABASE {
  createDatabaseInstance() {
    return new Mongoose();
  }
}
