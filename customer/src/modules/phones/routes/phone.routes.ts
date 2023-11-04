import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import PhoneController from '../controllers/Phone.controller';

const phoneRouter = Router();
const phoneController = new PhoneController();

phoneRouter.get('/', phoneController.list);

phoneRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      ddd: Joi.number().required(),
      phone: Joi.number().required(),
      default: Joi.boolean().default(false).required(),
      idCustomer: Joi.number().required(),
    },
  }),
  phoneController.create,
);

export default phoneRouter;
