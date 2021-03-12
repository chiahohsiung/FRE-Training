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
    albums!: Album[]
    count!: Number
    constructor(private artists: ArtistsService) {}

    ngOnInit(): void {
        this.getAlbums()
    }
    getAlbums() {
        this.artists.getAlbums().subscribe((albums: Result) => {
            console.log(albums)
            this.count = albums.resultCount
            this.albums = albums.results
        })
    }
}
