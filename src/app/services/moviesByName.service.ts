import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesByNameService {
  url = `https://www.omdbapi.com/?apikey=${environment.omdb_APIKEY}&`
  constructor(private http: HttpClient) { }
  getMovies(name: string, year: string): Observable<any> {
    const URL = `${this.url}t=${name}&y=${year}`
    return this.http.get(URL)
  }
}
