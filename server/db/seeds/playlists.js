export async function seed(knex) {
  await knex('playlists')
    .del()
    .then(() => {
      return knex('playlists').insert([
        {
          id: 1,
          name: 'Classic Rock Hits',
          songs: [1, 3],
        },
        {
          id: 2,
          name: 'Chill Vibes',
          songs: [2],
        },
      ])
    })
}
