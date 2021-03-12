import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Album } from "./albums/album"
import { Result } from "./albums/Result"

@Injectable({
    providedIn: "root",
})
export class ArtistsService {
    artist: string
    albums: Album[]
    count: Number
    constructor(private http: HttpClient) {
        this.artist = ""
        this.albums = []
        this.count = 0
    }
    baseUrl = (artistName: string) => {
        return `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`
    }
    public getAlbums(): Observable<Result> {
        console.log(this.artist)
        let url = this.baseUrl(this.artist)
        return this.http.get<Result>(url)
    }

    public saveValue(value: string) {
        console.log(value)
        this.artist = value
        this.getAlbums().subscribe((albums: Result) => {
            console.log(albums)
            this.count = albums.resultCount
            this.albums = albums.results
        })
    }
    public artistAlbums() {
        return this.albums
    }
}
