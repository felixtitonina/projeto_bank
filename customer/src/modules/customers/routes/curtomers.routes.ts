import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import CustomersController from '../controllers/Customer.controller';

const customersRouter = Router();
const customersController = new CustomersController();

customersRouter.get('/', customersController.list);
customersRouter.get('/:id', customersController.id);

customersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      document: Joi.string().required(),
      businessName: Joi.string().optional(),
    },
  }),
  customersController.create,
);

export default customersRouter;
