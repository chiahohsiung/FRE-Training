import {
  Component,
  Input,
  OnInit,
  SimpleChange,
  Output,
  EventEmitter,
} from '@angular/core';
import { Contact } from '../parent/contact.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() contacts: Contact[] = [];

  @Output() sendIndex: EventEmitter<number> = new EventEmitter<number>();
  data: Contact[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.contacts);
  }

  ngOnChanges(changes: SimpleChange): void {
    if (this.contacts) {
      console.log(this.contacts);
    } else {
      console.log('NO');
    }
  }

  removeContact(index: number): void {
    this.sendIndex.emit(index);
    this.contacts = this.contacts.filter(
      (contact) => this.contacts.indexOf(contact) !== index
    );
  }
}
