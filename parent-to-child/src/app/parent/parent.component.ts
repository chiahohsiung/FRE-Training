import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-parent",
    templateUrl: "./parent.component.html",
    styleUrls: ["./parent.component.less"],
})
export class ParentComponent implements OnInit {
    person: string = ""
    personList: string[] = []
    constructor() {}

    ngOnInit(): void {}
    addPerson(person: string): void {
        this.person = person
        this.personList.push(person)
        this.person = ""
    }
}
