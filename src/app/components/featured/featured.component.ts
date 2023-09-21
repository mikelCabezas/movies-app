import { Component, OnInit } from '@angular/core';
import { MoviesByNameService } from 'src/app/services/moviesByName.service';
import { Movie } from 'src/app/models/movies';
import { Router } from '@angular/router';
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  constructor(
    private moviesByNameService: MoviesByNameService,
    private router: Router
  ) { }

  bestSeries: Movie[] = []
  mostWatched: Movie[] = []
  currentFavs: any[] = []

  ngOnInit(): void {
    const localFavs: any = localStorage.getItem('favs')
    if (localFavs) {
      const favs = JSON.parse(localFavs)
      this.currentFavs = favs
    }

    this.moviesByNameService.getMovies('One Piece', '2023').subscribe(data => {
      const movies = data
      if (movies) {
        this.bestSeries.push(movies)
      }
    })
    this.moviesByNameService.getMovies('Big Bang Theory', '2007').subscribe(data => {
      const movies = data
      if (movies) {
        this.mostWatched.push(movies)
      }
    })
    this.moviesByNameService.getMovies('How I Met Your Mother', '2005').subscribe(data => {
      const movies = data
      if (movies) {
        this.mostWatched.push(movies)
      }
    })
    this.moviesByNameService.getMovies('Futurama', '1999').subscribe(data => {
      const movies = data
      if (movies) {
        this.mostWatched.push(movies)
      }
    })
    this.moviesByNameService.getMovies('One Piece', '1999').subscribe(data => {
      const movies = data
      if (movies) {

        this.bestSeries.push(movies)
      }
    })
    this.moviesByNameService.getMovies('Mr. Robot', '2015').subscribe(data => {
      const movies = data
      if (movies) {
        this.bestSeries.push(movies)
      }
    })
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

    const url: string = this.router.url;
    this.router.navigateByUrl('/toggle', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([url])
      })
  }
  checkFav(id: any) {
    return this.currentFavs.some(movie => movie.imdbID === id)
  }
}
