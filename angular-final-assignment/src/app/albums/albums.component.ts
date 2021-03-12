import { Component, OnInit } from "@angular/core"
import { ArtistsService } from "../artists.service"
import { Album } from "./album"
import { Result } from "./Result"

@Component({
    selector: "app-albums",
    templateUrl: "./albums.component.html",
    styleUrls: ["./albums.component.css"],
})
export class AlbumsComponent implements OnInit {
    count: Number
    albums: Album[]
    constructor(private artists: ArtistsService) {
        this.count = 0
        this.albums = []
    }

    ngOnInit(): void {
        this.artists.getAlbums("sam").subscribe((albums: Result) => {
            console.log(albums)
            this.count = albums.resultCount
            this.albums = albums.results
        })
    }
}
