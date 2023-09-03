export async function seed(knex) {
  await knex('users').insert([
    {
      id: 1,
      firstname: 'user123',
      email: 'user123@example.com',
      password: 'password123',
    },
    {
      id: 2,
      firstname: 'musiclover',
      email: 'musiclover@example.com',
      password: 'password456',
    },
  ])
}
