import { Joi } from 'celebrate';

const schemaList = {
  page: Joi.number().optional(),
  limit: Joi.number().optional(),
  id: Joi.number().optional(),
  document: Joi.string().optional(),
  name: Joi.string().optional(),
  idCustomer: Joi.number().optional(),
  status: Joi.number().optional(),
  idProduct: Joi.number().optional(),
  idChargeBasket: Joi.number().optional(),
  idLogin: Joi.string().optional(),
};

export { schemaList };
