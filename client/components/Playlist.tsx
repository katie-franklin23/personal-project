import { Playlists } from '../../models/playlist'

interface Playlist {
  playlists: Playlists[]
}

export const Playlist = ({ ...playlist }: Playlists) => {
  return (
    <div>
      <p>
        {playlist.id}
        {playlist.name}
        {playlist.songs}
      </p>
    </div>
  )
}
