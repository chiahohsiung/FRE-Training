import { Action } from '@ngrx/store'
import { Album } from './../models/album.model'
import * as AlbumActions from './../actions/album.actions'

export function reducer(state: Album[] = [], action: AlbumActions.Actions){
  switch (action.type) {
    case AlbumActions.ADD_ALBUM:
      return [...state, action.payload]
    case AlbumActions.REMOVE_ALBUM:
      state = []
      return []
    default:
      return state
  }
}
