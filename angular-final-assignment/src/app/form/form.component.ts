import { Component, OnInit } from "@angular/core"
import { ArtistsService } from "../artists.service"

@Component({
    selector: "app-form",
    templateUrl: "./form.component.html",
    styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
    input: string
    constructor(private artists: ArtistsService) {
        this.input = ""
    }

    ngOnInit(): void {}

    logInput(event: Event): void {
        // event.preventDefault()
        this.artists.saveValue(this.input)
    }
}
