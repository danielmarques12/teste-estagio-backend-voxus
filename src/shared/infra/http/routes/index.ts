import { Router } from 'express';

import { postRoutes } from './posts.routes';
import { userRoutes } from './users.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

export { router };
