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
  pages: number[] = []
  results: any[] = []
  currentFavs: any[] = []

  ngOnChanges() {
    const localFavs: any = localStorage.getItem('favs')
    if (localFavs) {
      const favs = JSON.parse(localFavs)
      this.currentFavs = favs
    }
    this._moviesService.getMovies(this.query, this.page).subscribe(data => {
      console.log(data)
      const _pages = Math.floor(data.totalResults / 10)
      for (let i = 1; i < _pages; i++) {
        this.pages.push(i)
      }

      this.results = []
      const movies = data.Search
      if (movies) {
        for (let movie of movies) {
          this.results.push(movie)
        }
      }
      console.log('results', this.results)
    })
  }

  checkFav(id: any) {
    return this.currentFavs.some(movie => movie.imdbID === id)
  }

  checkFavs() {
    return this.currentFavs.some(movie => movie.imdbID === 'id')
  }

  changePage(_page: number) {
    this.page = _page
    this.searchMovies()
  }
  addToFavs(result: any) {
    const favs = localStorage.getItem('favs')
    const updateFavs = JSON.parse(favs || '[]');

    updateFavs.push(result)

    localStorage.setItem('favs', JSON.stringify(updateFavs));

    this.checkFav(result.imdbID)

  }
  searchMovies() {
    this._moviesService.getMovies(this.query, this.page).subscribe(data => {
      console.log(data)
      this.results = []
      const movies = data.Search
      for (let movie of movies) {
        this.results.push(movie)
        console.log('movie', movie)
      }
      console.log('results', this.results)
    })
  }

}