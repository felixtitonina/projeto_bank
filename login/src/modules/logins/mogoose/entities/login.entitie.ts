import mongoose from '@infra/database/database';
import { Schema, Document } from 'mongoose';
import ILogin from '../../interfaces/ILogin';

// import mongoosePaginate from 'mongoose-paginate';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';

const loginSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nameCompany: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    document: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      default: 0,
    },
    tryLogin: {
      type: Number,
    },
    dateBlocked: {
      type: Date,
    },
    idCustomer: {
      type: Number,
      required: true,
    },
    idProduct: {
      type: Number,
      required: true,
    },
  },
  { timestamps: {} },
);
loginSchema.plugin(mongoosePagination);
const schemaModel = mongoose.db.model<ILogin & Document, Pagination<ILogin>>('logins', loginSchema);
export default schemaModel;
