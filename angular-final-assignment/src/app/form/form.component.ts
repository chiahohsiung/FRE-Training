import { Component, OnInit } from "@angular/core"
import { Album } from "../albums/album"
import { Result } from "../albums/Result"
import { ArtistsService } from "../artists.service"
import { LocalStorageService } from "../local-storage.service"

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
    filter: number

    options = [10, 25, 50, 100, 200]
    constructor(
        private artists: ArtistsService,
        private ls: LocalStorageService
    ) {
        this.input = ""
        this.count = 0 || JSON.parse(this.ls.getItem("count")!)
        this.albums = []
        this.artist = "" || JSON.parse(this.ls.getItem("artist")!)
        this.filter = 0
    }

    ngOnInit(): void {
        this.albums = JSON.parse(this.ls.getItem("albums")!)
        this.input = JSON.parse(this.ls.getItem("artist")!)
    }

    logInput(event: Event): void {
        event.preventDefault()
        this.artists.saveValue(this.input)
        this.fetch()
        this.artist = this.artists.artist
    }
    updateList() {
        this.albums = [
            ...JSON.parse(this.ls.getItem("albums")!),
        ].slice(1, this.filter)
    }

    fetch() {
        this.artists.getAlbums().subscribe((albums: Result) => {
            console.log(albums)
            this.count = albums.resultCount
            this.albums = albums.results
        })
    }
}
