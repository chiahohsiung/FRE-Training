import { Album } from './models/album.model'

export interface AppState {
  readonly album: Album[];
}
