import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import CustomersController from '../controllers/Customer.controller';

const customersRouter = Router();
const customersController = new CustomersController();

customersRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      id: Joi.number().optional(),
      name: Joi.string().optional(),
      email: Joi.string().email().optional(),
      document: Joi.string().min(11).max(14).optional(),
      status: Joi.string().optional().valid('WAITING_DOCUMENT', 'ACTIVE', 'WAITING_CORRECT'),
    },
  }),
  customersController.list,
);
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
