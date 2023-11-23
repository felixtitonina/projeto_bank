import mongoose from '@infra/database/database';
import mongoosePaginate from 'mongoose-paginate';

const loginSchema = new mongoose.db.Schema(
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
loginSchema.plugin(mongoosePaginate);
const schemaModel = mongoose.db.model('logins', loginSchema);
export default schemaModel;
