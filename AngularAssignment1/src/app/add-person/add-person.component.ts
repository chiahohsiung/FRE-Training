import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-person",
  templateUrl: "./add-person.component.html",
  styleUrls: ["./add-person.component.css"]
})
export class AddPersonComponent implements OnInit {
  personName: string = "";
  personList: string[] = [];

  addPerson(newPerson: any) {
    this.personName = newPerson.value;
    if (this.personName) {
      this.personList.push(this.personName);
    }
    newPerson.value = "";
  }

  constructor() {}

  ngOnInit() {}
}
