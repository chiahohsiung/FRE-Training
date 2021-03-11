import { Component } from '@angular/core';
import { Todo } from './shared/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  defaultTodo: Todo = {
    id: 0,
    task: '',
    complete: false,
  };

  todoList: Todo[] = [];

  addTodo(task: string) {
    this.defaultTodo = { ...this.defaultTodo, task };
    this.todoList.unshift(this.defaultTodo);
  }

  resetTodo(id: number) {
    const todo: Todo = {
      id: (id += 1),
      task: '',
      complete: false,
    };
    this.defaultTodo = todo;
  }

  submit(task: string) {
    this.addTodo(task);
    this.resetTodo(this.defaultTodo.id);
  }
}
