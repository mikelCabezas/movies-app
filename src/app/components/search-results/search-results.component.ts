import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnChanges {
  @Input() query: any
  constructor(
    private _moviesService: MoviesService
  ) { }
  // query = ''
  page = 1
  results: any[] = []

  ngOnChanges() {
    this._moviesService.getMovies(this.query, this.page).subscribe(data => {
      console.log(data)
      this.results = []
      const movies = data.Search
      for (let movie of movies) {
        delete movie.imdbID
        this.results.push(movie)
      }
      console.log('results', this.results)
    })
  }
  addToFavs(result: any) {
    const favs = localStorage.getItem('favs')
    const updateFavs = JSON.parse(favs || '[]');

    updateFavs.push(result)

    localStorage.setItem('favs', JSON.stringify(updateFavs));

  }
  searchMovies() {
    this._moviesService.getMovies(this.query, this.page).subscribe(data => {
      console.log(data)
      this.results = []
      const movies = data.Search
      for (let movie of movies) {
        delete movie.imdbID
        this.results.push(movie)
        console.log('movie', movie)
      }
      console.log('results', this.results)
    })
  }

}