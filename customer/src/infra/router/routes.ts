import { Router } from 'express';
import customersRouter from '@modules/customers/routes/curtomers.routes';
import adressesRouter from '@modules/addresses/routes/addresses.routes';
import phonesRouter from '@modules/phones/routes/phone.routes';

const routes = Router();

routes.use('/api/customers', customersRouter);
routes.use('/api/addresses', adressesRouter);
routes.use('/api/phones', phonesRouter);

export default routes;
