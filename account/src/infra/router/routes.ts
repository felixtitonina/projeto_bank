import { Router } from 'express';
import accountRouter from '@modules/account/routes/account.routes';

const routes = Router();

routes.use('/api/accounts', accountRouter);

export default routes;
