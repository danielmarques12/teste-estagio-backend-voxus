import { Router } from 'express';

import { SessionController } from '../../../../modules/users/SessionController';
import { UserController } from '../../../../modules/users/UserController';

const userController = new UserController();
const sessionController = new SessionController();

const userRoutes = Router();

userRoutes.post('/create', userController.create);
userRoutes.post('/auth', sessionController.create);

export { userRoutes };
