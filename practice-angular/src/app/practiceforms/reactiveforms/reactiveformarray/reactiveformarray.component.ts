import { Component, OnInit } from '@angular/core';
import {FormGroup,FormArray,FormBuilder, FormControl} from '@angular/forms'
@Component({
  selector: 'app-reactiveformarray',
  templateUrl: './reactiveformarray.component.html',
  styleUrls: ['./reactiveformarray.component.css']
})
export class ReactiveformarrayComponent implements OnInit {
  title="FormArray in Reactive forms"
  skillform!:FormGroup;

  constructor(private fb : FormBuilder) { 
    this.skillform = this.fb.group({
      name: new FormControl(''),
      // skills: [this.fb.array([
      //   this.fb.control('')
      // ])]
      skills: new FormArray([])
    })
  }
  get skills() {
    return this.skillform.get('aliases') as FormArray;
  }
  ngOnInit(): void {
  }
  addSkills() {
    this.skills.push(this.fb.control(''))
  }
  removeSkills(i:number) {
    this.skills.removeAt(i)
  }
  onSubmit(){
    console.log(this.skillform.value)
  }
}
