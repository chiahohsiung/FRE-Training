import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message:string="Hello: ";
  title = 'DataBinding';
  city:string = "";
  city1:string = "";
  
  doUpdate(data:any){
    this.city = data.target.value;
  }
  
  doUpdate1(data:string){
    this.city1 = data;
  }

  onClick(){
    this.message += (new Date()).toLocaleTimeString();
  }
}
