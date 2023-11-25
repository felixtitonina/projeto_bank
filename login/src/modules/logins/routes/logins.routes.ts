import { Router } from 'express';
import LoginController from '../controllers/Login.controller';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/', loginController.create);
loginRouter.get('/', loginController.list);
loginRouter.get('/:id', loginController.findById);
loginRouter.post('/oauth', loginController.oauth);

export default loginRouter;
