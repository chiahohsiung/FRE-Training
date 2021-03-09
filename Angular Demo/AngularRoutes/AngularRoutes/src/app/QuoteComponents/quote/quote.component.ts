import { Component, OnInit } from '@angular/core';
import { DataService } from "../../Services/data.service.service";
import { ActivatedRoute } from "@angular/router";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quote!: string;
  aname!: string;

  constructor(private dService: DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(map((p: any) => p["name"])).subscribe((n: any) => {
      // this.route.params.subscribe((n: any) => {
      this.aname = n;
    });
  }

  get() {
    if (this.dService.SelectedAuthor)
      this.quote = this.dService.SelectedAuthor.quote;
  }

}
