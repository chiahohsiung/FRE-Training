import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {SearchSongsService} from "../../service/search-songs.service";
import {Location} from "@angular/common";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchWord:string = "";
  constructor(private location: Location, private router:Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const splitURL = this.location.path().split("/");
    if(splitURL[1] === "search" && splitURL.length === 3){
      this.searchWord = splitURL[2].replace("%20", " ");
    }
  }

  onSubmit(){
    this.router.navigateByUrl(`search/${this.searchWord}`);
  }
}
