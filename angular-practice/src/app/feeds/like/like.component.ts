import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  isHover: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showEmojis() {
    this.isHover = true
    console.log("showing emojis")
  }
  onLeave() {
    this.isHover = false;
  }
}
