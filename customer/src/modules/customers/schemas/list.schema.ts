import { Joi } from 'celebrate';

const schemaList = {
  page: Joi.number().optional(),
  limit: Joi.number().optional(),
  id: Joi.number().optional(),
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  document: Joi.string().min(11).max(14).optional(),
  status: Joi.string().optional().valid('WAITING_DOCUMENT', 'ACTIVE', 'WAITING_CORRECT'),
};

export { schemaList };
