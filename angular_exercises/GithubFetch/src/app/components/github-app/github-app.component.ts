import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {

  githubUserQuery: string;
  githubProfile: any;
  githubRepos: any[];
  errorMessage: string;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  searchUser() {
    // get the github profile
    this.githubService.getProfile(this.githubUserQuery).subscribe(
    (data) => {this.githubProfile = data;});

    // get the github repos
    this.githubService.getRepos(this.githubUserQuery).subscribe(
      (data) => {this.githubRepos = data;});

  }

}
