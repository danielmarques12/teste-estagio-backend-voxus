import { Knex } from 'knex';

const tagIds = [
  '654105a6-4f0f-4ac5-8b9a-870af185238a',
  'f54280eb-df02-4043-abdb-fa9f8952085a',
  '90a7bc4b-b012-4e5e-b0d5-9740f883e4d9',
  'f0f3f05e-0959-432a-b408-df1e386ff75b',
  '4a5265b1-641e-4e61-9335-a1d206bb7038',
  'c703f104-3fcf-4a20-9f8d-b83877f7f7db',
  'a963979e-0f2d-4670-a611-7361d6fd8910',
  'ed42199c-eab9-4ff1-bd6b-c3ca95c5e85c',
  '25965e05-8767-4d65-8316-937ff86fda15',
];
const postIds = [
  '3a533249-06e8-4b2b-a44f-9aced37676dd',
  '256cc0fc-eeca-4afb-8e0b-a87eca62a23d',
  'b87323cd-19b1-4cb4-8ebf-71b9a4dba81b',
];

const tags = ['Tag 1', 'Tag 2', 'Tag 3'];

export async function seed(knex: Knex): Promise<void> {
  await knex('tags').insert([
    {
      tag_id: tagIds[0],
      name: tags[0],
      post_id: postIds[0],
    },
    {
      tag_id: tagIds[1],
      name: tags[1],
      post_id: postIds[0],
    },
    {
      tag_id: tagIds[2],
      name: tags[2],
      post_id: postIds[0],
    },
    {
      tag_id: tagIds[3],
      name: tags[0],
      post_id: postIds[1],
    },
    {
      tag_id: tagIds[4],
      name: tags[1],
      post_id: postIds[1],
    },
    {
      tag_id: tagIds[5],
      name: tags[2],
      post_id: postIds[1],
    },
    {
      tag_id: tagIds[6],
      name: tags[0],
      post_id: postIds[2],
    },
    {
      tag_id: tagIds[7],
      name: tags[1],
      post_id: postIds[2],
    },
    {
      tag_id: tagIds[8],
      name: tags[2],
      post_id: postIds[2],
    },
  ]);
}
