import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempalted-form',
  templateUrl: './tempalted-form.component.html',
  styleUrls: ['./tempalted-form.component.scss']
})
export class TempaltedFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logForm(frm:any){
  //  if(frm.valid){
      console.log(frm.value);
 //   }
  }

}
