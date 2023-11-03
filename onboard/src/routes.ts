import { Router } from 'express';
import { CustomerController } from './controllers/Customer.controller';
import { AddressController } from './controllers/Address.controller';
import { PhoneController } from './controllers/Phone.controller';

const routes = Router();

routes.post('/customer', new CustomerController().create);
routes.get('/customer', new CustomerController().list);

routes.post('/address', new AddressController().create);
routes.get('/address', new AddressController().list);

routes.post('/phone', new PhoneController().create);
routes.get('/phone', new PhoneController().list);

export default routes;
