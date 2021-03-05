import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PipeAssignment';
  nameList:string[] = ["Manish", "Ramakant", "Varun", "Rohit", "Subodh"];
  person = "";
  by = "";
  byy="";

  onSelect(e){
    e.preventDefault();
    console.log(e.target.text);
    this.person = e.target.text;
  }

  onSelect1(name){
    this.person = name;
  }

  person1:string = "";
  nameList1:string[] = ["Manish", "Ramakant", "Varun", "Rohit", "Subodh"];
  onFilter(e){
    e.preventDefault();
    this.nameList1 = this.nameList.filter((ele)=>ele.startsWith(e.target.value));
  }
  onSelect2(name){
    this.person1 = name;
  }
}
