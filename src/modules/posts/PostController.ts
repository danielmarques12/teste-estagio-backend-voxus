import { Request, Response } from 'express';
import * as yup from 'yup';

import query from '../../shared/infra/knex/knex';

interface ITags {
  name: string;
}

interface IRequest {
  title: string;
  content: string;
  user_id: string;
  tags?: Array<ITags>;
}

class PostController {
  async create(request: Request, response: Response): Promise<Response> {
    const { title, content, user_id, tags }: IRequest = request.body;

    const schema = yup.object().shape({
      title: yup.string().required().min(5).max(100),
      content: yup.string().required().min(100),
      user_id: yup.string().required(),
      tags: yup.array().of(
        yup.object().shape({
          name: yup.string().max(10),
        })
      ),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(401).json({ error: 'Validation failed' });
    }

    const [post_id] = await query('posts')
      .insert({
        title,
        content,
        user_id,
      })
      .returning('post_id');

    if (tags) {
      tags.map(async (tag) =>
        query('tags').insert({ name: tag.name, post_id })
      );
    }

    return response.status(201).json('Post created successfully');
  }
}

export { PostController };
