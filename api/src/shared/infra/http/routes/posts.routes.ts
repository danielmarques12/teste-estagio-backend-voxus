import { Router } from 'express';

import { PostController } from '../../../../modules/posts/PostController';
import { TagController } from '../../../../modules/posts/TagController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const postController = new PostController();
const tagController = new TagController();

const postRoutes = Router();

postRoutes.post('/create', ensureAuthenticated, postController.create);
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

postRoutes.get('/tags/:post_id', tagController.show);

export { postRoutes };
