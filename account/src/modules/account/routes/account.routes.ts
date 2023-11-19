import { Router } from 'express';
import AccountController from '../controllers/Account.controller';
import { schemaCreate } from '../schemas/create.schema';

import {
  validatorQueryMiddleware,
  validatorBodyMiddleware,
} from '@shared/validator/validator.schama';
import { schemaList } from '../schemas/list.schema';

const accountRouter = Router();
const accountController = new AccountController();

accountRouter.get('/', validatorQueryMiddleware(schemaList), accountController.list);

accountRouter.get('/:id', accountController.id);

accountRouter.post('/', validatorBodyMiddleware(schemaCreate), accountController.create);

export default accountRouter;
