import { Action } from '@ngrx/store'
import { Album } from './../models/album.model'
import * as AlbumActions from './../actions/album.actions'

export function reducer(state: Album[] = [], action: AlbumActions.Actions){
  switch (action.type) {
    case AlbumActions.ADD_ALBUM:
      localStorage.setItem('data', JSON.stringify(action.payload))
      state = []
      for (const e of action.payload['results']){
        state.push({artworkUrl100:e['artworkUrl100'], artistName:e['artistName'], collectionName:e['collectionName']})
      }
      return state
    case AlbumActions.REMOVE_ALBUM:
      state = []
      return []
    default:
      state = []
      let storageData = JSON.parse(localStorage.getItem('data'))
      if (storageData){
        for (const e of storageData['results']){
          state.push({artworkUrl100:e['artworkUrl100'], artistName:e['artistName'], collectionName:e['collectionName']})
        }
      }
      return state
  }
}
