import { Router } from 'express';

import { UserController } from '../../../../modules/users/UserController';

const userController = new UserController();

const userRoutes = Router();

userRoutes.post('/create', userController.create);

export { userRoutes };
