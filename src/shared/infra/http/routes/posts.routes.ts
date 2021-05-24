import { Router } from 'express';

import { PostController } from '../../../../modules/posts/PostController';

const postController = new PostController();

const postRoutes = Router();

postRoutes.post('/create', postController.create);

export { postRoutes };
