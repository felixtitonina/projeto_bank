import { Router } from 'express';
import { CustomerController } from './controllers/Customer.controller';

const routes = Router();

routes.post('/', new CustomerController().create);
routes.get('/', new CustomerController().list);
export default routes;
