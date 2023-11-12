import { Router } from 'express';
import CustomersController from '../controllers/Customer.controller';
import { schemaList } from '../schemas/list.schema';
import { schemaCreate } from '../schemas/create.schema';
import {
  validatorQueryMiddleware,
  validatorBodyMiddleware,
} from '@shared/validator/validator.schama';

const customersRouter = Router();
const customersController = new CustomersController();

customersRouter.get('/', validatorQueryMiddleware(schemaList), customersController.list);

customersRouter.get('/:id', customersController.id);

customersRouter.post('/', validatorBodyMiddleware(schemaCreate), customersController.create);

export default customersRouter;
