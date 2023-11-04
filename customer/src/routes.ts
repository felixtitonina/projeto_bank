import { Router } from 'express';
import customersRouter from './modules/customers/routes/curtomers.routes';
import adressesRouter from './modules/addresses/routes/addresses.routes';
import phonesRouter from './modules/phones/routes/phone.routes';

const routes = Router();

routes.use('/customers', customersRouter);
routes.use('/addresses', adressesRouter);
routes.use('/phones', phonesRouter);

export default routes;
