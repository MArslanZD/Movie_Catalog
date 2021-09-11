import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  private omdbSearch = 'http://www.omdbapi.com/?s=';
  private omdbSearchbyId = 'http://www.omdbapi.com/?i=';
  constructor(private http: Http) { }

  searchMovieByName(input: string): Observable<any> {
    return this.http.get(this.omdbSearch + input + '&apikey=2930680a&plot=full')
      .map(response => {
        return response.json() as string
    })
  }


  
  searchbyId(imdbKey: string): Observable<any> {
    return this.http.get(this.omdbSearchbyId + imdbKey + '&apikey=2930680a&plot=full')
      .map(response => {
        return response.json() as string
    })
  }
  
}
