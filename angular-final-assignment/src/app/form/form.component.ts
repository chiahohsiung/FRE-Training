import { Component, OnInit } from "@angular/core"
import { Album } from "../albums/album"
import { Result } from "../albums/Result"
import { ArtistsService } from "../artists.service"

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
    input: string
    albums: Album[]
    count: Number
    artist: string
    constructor(private artists: ArtistsService) {
        this.input = ""
        this.count = 0
        this.albums = []
        this.artist = ""
    }

    ngOnInit(): void {}

    logInput(event: Event): void {
        event.preventDefault()
        this.artists.saveValue(this.input)
        this.fetch()
        this.artist = this.artists.artist
    }

    fetch() {
        this.artists.getAlbums().subscribe((albums: Result) => {
            console.log(albums)
            this.count = albums.resultCount
            this.albums = albums.results
        })
    }
}
