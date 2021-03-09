import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { Post } from './interface/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'httpclient service';
  posts: Array<Post> = [];

  constructor(private dservice: DataService) {

  }

  ngOnInit() {
    this.dservice.getPosts().subscribe(r => this.posts = r);
  }

}
