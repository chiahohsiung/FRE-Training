import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INavRoute } from 'src/app/interface/inav-route';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass'],
})
export class MainNavComponent {
  title = 'Navigation';

  // i have no idea why this is here
  links: INavRoute[] = [
    { path: '/home', title: 'Main Page' },
    { path: '/todo', title: 'Todo List' },
  ];
  constructor(private router: Router) {}
}
