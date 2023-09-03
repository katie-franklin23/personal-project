import { getPlaylists } from '../apis/playlists.ts'
import { useEffect, useState } from 'react'

import { Playlists } from '../../models/playlist.ts'
import { PlaylistList } from './PlaylistList.tsx'

function App() {
  const [playlist, setPlaylist] = useState([] as Playlists[])

  const fetchPlaylist = () => {
    getPlaylists()
      .then((response) => {
        setPlaylist(response.body)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchPlaylist()
  })

  return (
    <>
      <div className="app">
        <h1>Song Swap: Your music Recommendations! 🎵</h1>
        <p>
          Whether you're in the mood to discover new tunes or share your musical
          gems, our pre-populated playlists offer a harmonious listening
          experience. Check it out below!
        </p>
        <PlaylistList playlists={playlist} />
      </div>
    </>
  )
}

export default App
