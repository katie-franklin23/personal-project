import { response } from 'express'
import request from 'superagent'

const rootUrl = '/api/v1'

export function getPlaylists(): Promise<any> {
  return request.get(rootUrl + '/playlists').then((res) => {
    return res
  })
}
