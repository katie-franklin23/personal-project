import connection from './connection.js'
// import { Fruit } from '../../models/fruit.ts'
import { Playlists } from '../../models/playlist.js'

// export async function getAllFruits(db = connection): Promise<Fruit[]> {
//   return db('fruit').select()
// }

export async function getAllPlaylists(db = connection): Promise<Playlists[]> {
  return db<Playlists>('playlists').select()
}
