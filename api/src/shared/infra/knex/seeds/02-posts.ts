import { Knex } from 'knex';

const userIds = [
  '1264e7a4-4b0f-41d5-9efb-da07b5c047c3',
  'f748a1a0-36e2-4d5f-885c-211e64dc9fc7',
  '9434ad83-c52d-4721-bf27-30f3c5aff543',
];
const postIds = [
  '3a533249-06e8-4b2b-a44f-9aced37676dd',
  '256cc0fc-eeca-4afb-8e0b-a87eca62a23d',
  'b87323cd-19b1-4cb4-8ebf-71b9a4dba81b',
];
const title = 'My Title';
const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum vitae massa sed vulputate. Ut at tortor vel est tempor volutpat at a sem. Suspendisse consectetur nisl aliquam, dapibus sapien vel, bibendum lorem. Praesent blandit tellus eu sagittis feugiat. Proin vitae imperdiet lectus. Vivamus efficitur odio eget sem tempor, a accumsan lectus varius. Nunc et iaculis elit, et bibendum arcu. In gravida nec augue nec posuere.

Etiam a nisl eget felis efficitur sollicitudin. Etiam hendrerit ipsum magna, ut gravida eros ultrices eget. Phasellus ornare congue elit sit amet fermentum. Duis ex risus, rutrum nec cursus malesuada, congue sit amet ipsum. Nullam quis urna non dui egestas convallis. Nam eu malesuada turpis. Cras vel posuere ligula.

Curabitur eu sapien quis massa volutpat posuere. Donec ultrices est mauris, vitae pulvinar odio dictum fermentum. Duis risus sapien, mattis et porttitor a, varius interdum purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam libero tortor, tincidunt eu tellus vel, tempus tristique lacus. Sed nec nulla at velit porttitor volutpat. Nunc augue orci, pulvinar a mattis at, aliquet sit amet eros. Donec auctor nisl eu leo iaculis tempor. Vestibulum in consequat orci. Suspendisse sagittis, quam consectetur tincidunt lacinia, mauris dolor semper odio, non fermentum tellus diam sit amet metus. Aenean et interdum est.

Proin neque elit, elementum non elit id, auctor fermentum sem. Curabitur non velit ornare, gravida est ac, tincidunt orci. In vel mauris nunc. Donec tempor sodales lectus, in ullamcorper velit consequat non. Sed condimentum libero ac lacinia posuere. Integer ipsum neque, pharetra nec nulla sed, ultrices tristique sem. Nulla facilisi. Nulla dignissim at massa sit amet pulvinar. Praesent eget ante sem. Fusce velit risus, suscipit vitae leo in, maximus porta metus. Duis varius in nulla vitae fringilla. Morbi non rutrum arcu. Integer tortor neque, sagittis eget interdum in, blandit.`;

export async function seed(knex: Knex): Promise<void> {
  await knex('posts').insert([
    {
      post_id: postIds[0],
      title,
      content,
      user_id: userIds[0],
    },
    {
      post_id: postIds[1],
      title,
      content,
      user_id: userIds[1],
    },
    {
      post_id: postIds[2],
      title,
      content,
      user_id: userIds[2],
    },
  ]);
}
