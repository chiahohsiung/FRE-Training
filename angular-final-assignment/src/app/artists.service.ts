import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Album } from "./albums/album"
import { Result } from "./albums/Result"

@Injectable({
    providedIn: "root",
})
export class ArtistsService {
    albums!: Album[]
    count!: Number
    artist: string
    constructor(private http: HttpClient) {
        // this.albums = []
        // this.count = 0
        this.artist = ""
    }
    baseUrl = (artistName: string) => {
        return `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`
    }
    getAlbums() {
        let url = this.baseUrl(this.artist)
        return this.http.get<Result>(url)
    }
    saveValue(value: string) {
        console.log(value)
        this.artist = value
    }
}
