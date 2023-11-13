import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AccountController from '../controllers/Account.controller';

const accountRouter = Router();
const accountController = new AccountController();

// accountRouter.get('/', accountController.list);

accountRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      idCustomer: Joi.number().required(),
      idProduct: Joi.number().required(),
      idChargeBasket: Joi.number().optional(),
      idLogin: Joi.string().optional(),
    },
  }),
  accountController.create,
);

export default accountRouter;
