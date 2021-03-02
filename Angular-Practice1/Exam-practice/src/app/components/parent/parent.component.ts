import { Component, OnInit } from '@angular/core';
import { ParentService } from './parent.service'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  private todoLists:object=[{}];
  constructor(private parentService: ParentService) { }
  
  ngOnInit(): void {
    this.parentService.getApi().subscribe(res=>this.setTodoLists(res))
  }

  setTodoLists(data:object):void{
    this.todoLists = data
  }

  getTodoLists():object{
    return this.todoLists;
  }
  

}
