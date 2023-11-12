import { Joi } from 'celebrate';

const schemaCreate = {
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  document: Joi.string().required(),
  businessName: Joi.string().optional(),
};

export { schemaCreate };
