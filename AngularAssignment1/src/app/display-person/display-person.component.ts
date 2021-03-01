import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-display-person",
  templateUrl: "./display-person.component.html",
  styleUrls: ["./display-person.component.css"]
})
export class DisplayPersonComponent implements OnInit {
  @Input()
  personList: string[];

  constructor() {}

  ngOnInit() {}
}
