import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Album } from "./albums/album"
import { Result } from "./albums/Result"
import { LocalStorageService } from "./local-storage.service"

@Injectable({
    providedIn: "root",
})
export class ArtistsService {
    artist: string
    albums: Album[]
    count: Number
    constructor(
        private http: HttpClient,
        private ls: LocalStorageService
    ) {
        this.artist = ""
        this.albums = []
        this.count = 0
    }
    baseUrl = (artistName: string) => {
        return `https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=500`
    }
    public getAlbums(): Observable<Result> {
        let url = this.baseUrl(this.artist)
        return this.http.get<Result>(url)
    }
    public saveValue(value: string) {
        console.log(value)
        this.artist = value
        this.getAlbums().subscribe((albums: Result) => {
            this.count = albums.resultCount
            this.albums = albums.results
            this.ls.setItem("albums", JSON.stringify(this.albums))
            this.ls.setItem("count", JSON.stringify(this.count))
            this.ls.setItem("artist", JSON.stringify(this.artist))
        })
    }
}
