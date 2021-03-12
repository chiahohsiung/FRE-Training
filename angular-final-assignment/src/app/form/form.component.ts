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
    constructor(private artists: ArtistsService) {
        this.input = ""
        this.count = 0
        this.albums = []
    }

    ngOnInit(): void {}

    logInput(event: Event): void {
        event.preventDefault()
        this.artists.saveValue(this.input)
        this.fetch()
    }

    fetch() {
        this.artists.getAlbums().subscribe((albums: Result) => {
            console.log(albums)
            this.count = albums.resultCount
            this.albums = albums.results
        })
    }
}
