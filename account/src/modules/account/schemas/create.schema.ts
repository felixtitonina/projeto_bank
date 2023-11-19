import { Joi } from 'celebrate';

const schemaCreate = {
  idCustomer: Joi.number().required(),
  idProduct: Joi.number().required(),
  idChargeBasket: Joi.number().optional(),
  idLogin: Joi.string().optional(),
};

export { schemaCreate };
