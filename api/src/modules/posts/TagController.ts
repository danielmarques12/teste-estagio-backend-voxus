import { Request, Response } from 'express';

import query from '../../shared/infra/knex/knex';

class TagController {
  async show(request: Request, response: Response): Promise<Response> {
    const { post_id } = request.params;

    const tags = await query
      .select(['tag_id as id', 'name'])
      .from('tags')
      .where({ post_id });

    return response.status(201).json(tags);
  }
}

export { TagController };
