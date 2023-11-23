import { Router } from 'express';
import LoginsRouter from '@modules/logins/routes/logins.routes';

const routes = Router();

routes.use('/api/login', LoginsRouter);

export default routes;
