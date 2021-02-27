import { Component, Input, OnInit } from "@angular/core"

@Component({
    selector: "app-child",
    templateUrl: "./child.component.html",
    styleUrls: ["./child.component.less"],
})
export class ChildComponent implements OnInit {
    @Input() person_list: string[] = []
    constructor() {}

    ngOnInit(): void {}
}
