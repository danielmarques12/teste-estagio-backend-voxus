import { Router } from 'express';

import { PostController } from '../../../../modules/posts/PostController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const postController = new PostController();

const postRoutes = Router();

postRoutes.post('/create', postController.create);
postRoutes.get('/index', postController.index);
postRoutes.get('/show/:post_id', postController.show);
postRoutes.patch(
  '/update/:post_id',
  ensureAuthenticated,
  postController.update
);
postRoutes.delete(
  '/delete/:post_id',
  ensureAuthenticated,
  postController.delete
);

export { postRoutes };
