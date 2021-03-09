import { Component, OnInit , Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.scss']
})
export class ShowFormComponent implements OnInit {
  @Input() nameList!:any[];

  search!:string;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    
  }

}
