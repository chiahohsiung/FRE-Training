import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HttpService } from '../http.service';
export let browserRefresh = false;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit, OnDestroy {
  artistName: string;

  // subscription: Subscription;

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) {
    this.http.refreshed.subscribe(() => {
      this.artistName = this.http.artistName;
    });
  }
  ngOnInit(): void {

  }
  onSearch() {
    this.http.searchUpdated.next(this.artistName);
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}