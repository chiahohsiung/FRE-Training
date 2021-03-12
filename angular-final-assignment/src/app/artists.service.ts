import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Result } from "./albums/Result"

@Injectable({
    providedIn: "root",
})
export class ArtistsService {
    albums: []
    constructor(private http: HttpClient) {
        this.albums = []
    }
    baseUrl = (artistName: string) => {
        return `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`
    }
    getAlbums = (artistName: string) => {
        let url = this.baseUrl(artistName)
        return this.http.get<Result>(url)
    }
}
