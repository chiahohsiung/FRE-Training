import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CLIENT_ID, CLIENT_SECRET } from '../credentials/GithubCred';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }


  //get profile
  getProfile(searchQuery): Observable<any> {
    let dataUrl = `https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    //console.log(this.http.get<any>(dataUrl).pipe(catchError(this.handleErrors)));
    //return this.http.get<any>(dataUrl).pipe(catchError(this.handleErrors));
    return this.http.get<any>(dataUrl);

  }


  //get repo
  getRepos(searchQuery): Observable<any[]> {
    let dataUrl = `https://api.github.com/users/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.http.get<any[]>(dataUrl);


  }



  handleErrors(error:HttpErrorResponse){
    let errorMessage: string;
    if(error.error instanceof ErrorEvent){
      //client side error
      errorMessage = `MESSAGE: ${error.error.message}`;
    } else {
      //server side error
      errorMessage = `STATUS: ${error.status} MESSAGE: ${error.message}`;
      return throwError(errorMessage);
    }
  }
}
