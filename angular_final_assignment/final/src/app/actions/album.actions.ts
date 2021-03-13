import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

import { Album } from './../models/album.model'

export const ADD_ALBUM = '[ALBUM] Add'
export const REMOVE_ALBUM = '[ALBUM] Remove'

export class AddAlbum implements Action {
  readonly type = ADD_ALBUM
  constructor(public payload: Object) {}
}

export class RemoveAlbum implements Action {
  readonly type = REMOVE_ALBUM
  constructor() {}
}

export type Actions = AddAlbum | RemoveAlbum
