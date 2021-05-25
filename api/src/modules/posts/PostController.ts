import { Request, Response } from 'express';
import * as yup from 'yup';

import query from '../../shared/infra/knex/knex';

interface ITags {
  name: string;
}

interface ICreatePost {
  title: string;
  content: string;
  tags?: Array<ITags>;
}

class PostController {
  async create(request: Request, response: Response): Promise<Response> {
    const { title, content, tags }: ICreatePost = request.body;
    const { id: user_id } = request.user;

    const schema = yup.object().shape({
      title: yup.string().required().min(5).max(100),
      content: yup.string().required().min(100),
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

  async index(request: Request, response: Response): Promise<Response> {
    const posts = await query
      .select([
        'p.post_id as id',
        'p.title',
        'p.publication_date',
        'u.name as author',
      ])
      .from({ p: 'posts' })
      .innerJoin({ u: 'users' }, 'p.user_id', 'u.user_id');

    return response.status(201).json(posts);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { post_id } = request.params;

    const post = await query
      .select([
        'p.title',
        'p.content',
        'p.publication_date',
        'u.name as author',
      ])
      .from({ p: 'posts' })
      .innerJoin({ u: 'users' }, 'p.user_id', 'u.user_id')
      .where({ post_id });

    return response.status(201).json(post);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { title, content } = request.body;
    const { post_id } = request.params;

    const schema = yup.object().shape({
      title: yup.string().min(5).max(100),
      content: yup.string().required().min(100),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(401).json({ error: 'Validation failed' });
    }

    await query('posts')
      .update({
        title,
        content,
      })
      .where({ post_id });

    return response.status(201).json('Post updated successfully');
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { post_id } = request.params;

    await query('posts').where({ post_id }).delete();

    return response.status(201).json('Post deleted successfully');
  }
}

export { PostController };
