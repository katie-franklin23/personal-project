import { Playlists } from '../../models/playlist'
import { Playlist } from './Playlist'

interface PlaylistInterface {
  playlists: Playlists[]
}

export const PlaylistList = ({ playlists }: PlaylistInterface) => {
  return (
    <div>
      <ul>
        {playlists.map((playlist: Playlists, index: number) => (
          <li key={index}>{<Playlist {...playlist} />}</li>
        ))}
      </ul>
    </div>
  )
}
