import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {

  @ViewChild('inputContent') input!:ElementRef;
  @ViewChild('select') select!:ElementRef;


  dataFetch!:any;
  public id!:any;

  choices:string[] = [
    '10',
    '50',
    '100',
    '200'
  ]

   constructor(private dataService:DataService,
     public route: ActivatedRoute,
     private router: Router) { }

   ngOnInit() {
     if(this.route.snapshot.paramMap.has('id')){
       this.id = this.route.snapshot.paramMap.get("id");
       console.log(this.id)
       this.dataService.fetchData(this.id)
       .subscribe(response => {
         console.log(response)
         this.dataFetch = response;

       });
     }

     console.log(this.select)



   }

   fetchdata(){
     this.id = '';
     if(this.input.nativeElement.value){
     this.dataService.fetchData(this.input.nativeElement.value)
     .subscribe(response => {
       console.log(response)
       this.dataFetch = response;
      //  this.router.navigate([`/${this.input.nativeElement.value}`])
     });
     }
   }


   display(){
    if(this.route.snapshot.paramMap.has('id')){
      this.id = this.route.snapshot.paramMap.get("id");
      console.log(this.id)
      this.dataService.fetchData(this.id)
      .subscribe(response => {
        this.dataFetch = response;
        this.dataFetch.resultCount = this.select.nativeElement.value;
        this.dataFetch.results = this.dataFetch.results.slice(0,this.select.nativeElement.value);

      });
    }else{
      this.id = '';
      if(this.input.nativeElement.value){
      this.dataService.fetchData(this.input.nativeElement.value)
      .subscribe(response => {
        console.log(response)
        this.dataFetch = response;
        this.dataFetch.resultCount = this.select.nativeElement.value;
        this.dataFetch.results = this.dataFetch.results.slice(0,this.select.nativeElement.value);
        // this.router.navigate([`/${this.input.nativeElement.value}`])
      });
      }
    }

  }

}


  //  display(){
  //    let dataCopy = {
  //      resultCount:'',
  //      results:[]
  //    }
  //    console.log('woshiselect')
  //    console.log(this.select)
  //   //  console.log(this.select.nativeElement.value)
  //    dataCopy.resultCount = this.select.nativeElement.value
  //    console.log(dataCopy.resultCount)

  //    dataCopy.results = this.dataFetch.results.slice(0,this.select.nativeElement.value)
  //    console.log(dataCopy.results)

