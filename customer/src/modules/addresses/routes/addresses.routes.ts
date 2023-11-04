import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AddressController from '../controllers/Address.controller';

const addressRouter = Router();
const addressController = new AddressController();

addressRouter.get('/', addressController.list);

addressRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      street: Joi.string().required(),
      neighborhood: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      postalCode: Joi.string().required(),
      country: Joi.string().required(),
      default: Joi.boolean().required(),
      idCustomer: Joi.number().required(),
    },
  }),
  addressController.create,
);

export default addressRouter;
