import { Component, Input } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-load-list',
  templateUrl: './load-list.component.html',
  styleUrls: ['./load-list.component.sass'],
})
export class LoadListComponent {
  @Input() loadList: any;
}
