import { hash } from 'bcrypt';
import { Request, Response } from 'express';

import query from '../../shared/infra/knex/knex';

class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userAlreadyExists = await query('users').where({ email }).first();

    if (userAlreadyExists) {
      return response.status(418).json({ error: 'User already exists' });
    }

    const password_hash = await hash(password, 12);

    await query('users').insert({
      name,
      email,
      password_hash,
    });

    return response.status(201).json('User created successfully');
  }
}

export { UserController };
