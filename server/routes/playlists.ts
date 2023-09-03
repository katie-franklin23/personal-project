import { Router } from 'express'

import * as db from '../db/playlists.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const playlists = await db.getAllPlaylists()

    res.json({ playlists: playlists.map((playlist) => playlist) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
