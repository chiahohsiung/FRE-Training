import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../../services/dataservice.service'
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quote!:string;
  aname!:string;
  constructor(private dataService:DataserviceService, 
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(map((p:any)=>p["name"])).subscribe((n:any)=>{
    this.aname = n;
  });
  }

  get(){
    if(this.dataService.SelectedAuthor){
      this.quote = this.dataService.SelectedAuthor.quote;
    }
  }

}
