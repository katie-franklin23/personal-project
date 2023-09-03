export async function seed(knex) {
  await knex('songs').insert([
    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock' },
    { id: 2, title: 'Imagine', artist: 'John Lennon', genre: 'Pop' },
    { id: 3, title: 'Hotel California', artist: 'Eagles', genre: 'Rock' },
  ])
}
