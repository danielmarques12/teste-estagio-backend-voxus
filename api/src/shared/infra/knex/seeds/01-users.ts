import { hashSync } from 'bcrypt';
import { Knex } from 'knex';

const password_hash = hashSync('123456', 8);
const userIds = [
  '1264e7a4-4b0f-41d5-9efb-da07b5c047c3',
  'f748a1a0-36e2-4d5f-885c-211e64dc9fc7',
  '9434ad83-c52d-4721-bf27-30f3c5aff543',
];

export async function seed(knex: Knex): Promise<void> {
  await knex('users').insert([
    {
      user_id: userIds[0],
      name: 'Daniel Marques',
      email: 'daniel@teste.com',
      password_hash,
    },
    {
      user_id: userIds[1],
      name: 'Voxus',
      email: 'voxus@teste.com',
      password_hash,
    },
    {
      user_id: userIds[2],
      name: 'Teste',
      email: 'teste@teste.com',
      password_hash,
    },
  ]);
}
