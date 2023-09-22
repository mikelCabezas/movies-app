import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movies';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnChanges {
  @Input() query: any
  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) { }

  currentPage = 1
  pages: number[] = []
  results: Movie[] = []
  hasResults: boolean | null = null
  currentFavs: any[] = []
  loader: boolean = false
  ngOnInit() {
    this.loader = true
    this.hasResults = null
  }
  ngOnChanges() {
    this.hasResults = null
    const localFavs: any = localStorage.getItem('favs')
    if (localFavs) {
      const favs = JSON.parse(localFavs)
      this.currentFavs = favs
    }
    if (this.results.length > 0) {
      this.loader = false
    }
    this.moviesService.getMovies(this.query, this.currentPage).subscribe(data => {
      this.results = []
      const movies = data.Search
      if (movies) {
        for (let movie of movies) {
          this.results.push(movie)
        }
      }
      const pages = Math.floor(data.totalResults / 10)
      if (pages === 0 && movies.length > 0) {
        this.pages = [1]
      }
      for (let i = 1; i < pages; i++) {
        this.pages.push(i)
      }
      if (this.results.length > 0) {
        this.hasResults = true
      } else {
        this.hasResults = false
      }
    })
  }
  checkFav(id: any) {
    return this.currentFavs.some(movie => movie.imdbID === id)
  }

  changePage(_page: number) {
    this.currentPage = _page
    this.searchMovies()
  }
  toggleToFavs(result: any) {
    const favs = localStorage.getItem('favs')
    const updateFavs = JSON.parse(favs || '[]');
    const index = updateFavs.findIndex((fav: any) => fav.imdbID === result.imdbID)

    if (index === -1) {
      updateFavs.push(result)
    } else {
      updateFavs.splice(index, 1)
    }

    localStorage.setItem('favs', JSON.stringify(updateFavs));

    this.checkFav(result.imdbID)
    const url: string = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([url])
      })
  }
  searchMovies() {
    this.moviesService.getMovies(this.query, this.currentPage).subscribe(data => {
      this.results = []
      const movies = data.Search
      for (let movie of movies) {
        this.results.push(movie)
      }
      this.results.length > 0 ? this.hasResults = true : false
    })
  }

}