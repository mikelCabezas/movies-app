import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = `https://www.omdbapi.com/?apikey=${environment.omdb_APIKEY}&`
  constructor(private http: HttpClient) { }

  getMovies(query: string, page: number): Observable<any> {
    const URL = `${this.url}s=${query}&page=${page}`
    console.log(URL)
    return this.http.get(URL)
  }
}
