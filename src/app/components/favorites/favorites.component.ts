import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';
import { Filter } from 'src/app/models/filter';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  postIndex = 0
  onEditModal = false

  currentFavs: Movie[] = []
  results: Movie[] = []

  types: string[] = []
  years: string[] = []

  filterActive: Filter = { Type: false, Year: false }
  filteredTypeItems: string[] = []
  filteredYearItems: string[] = []
  ngOnInit(): void {
    this.filterActive = { Type: false, Year: false }
    this.filteredTypeItems = []
    this.filteredYearItems = []

    const localFavs: any = localStorage.getItem('favs')

    if (localFavs) {
      const favs = JSON.parse(localFavs)
      this.currentFavs = favs
    }

    const allTypes = []
    const allYears = []

    for (let fav of this.currentFavs) {
      allTypes.push(fav.Type)
      allYears.push(fav.Year)
    }

    this.types = [...new Set(allTypes)];
    this.years = [...new Set(allYears)];

    this.getMovies()
  }

  handleEditFavorite(index: number) {
    this.onEditModal = true
    this.postIndex = index
  }

  getPostIndex() {
    return this.postIndex
  }

  deleteIndex(index: number) {
    this.currentFavs.splice(index, 1);
    localStorage.setItem('favs', JSON.stringify(this.currentFavs));
  }

  updateFavorite(favorite: any) {
    this.currentFavs[this.postIndex] = favorite
    localStorage.setItem('favs', JSON.stringify(this.currentFavs));
    this.onEditModal = false
    this.postIndex = 0
  }

  cancelUpdateFavorite() {
    this.onEditModal = false
    this.postIndex = 0
  }

  filterItemByType(item: string) {
    if (this.filteredTypeItems.includes(item)) {
      const index = this.filteredTypeItems.indexOf(item)
      this.filteredTypeItems.splice(index, 1)
    } else {
      this.filteredTypeItems.push(item)
    }
    this.filteredTypeItems.length === 0 ? this.filterActive.Type = false : this.filterActive.Type = true
    this.getMovies()
  }

  filterItemByYear(item: string) {
    if (this.filteredYearItems.includes(item)) {
      const index = this.filteredYearItems.indexOf(item)
      this.filteredYearItems.splice(index, 1)
    } else {
      this.filteredYearItems.push(item)
    }
    this.filteredYearItems.length === 0 ? this.filterActive.Year = false : this.filterActive.Year = true
    this.getMovies()
  }

  getMovies() {
    this.results = []
    for (let favorite of this.currentFavs) {
      if (!this.filterActive.Type && !this.filterActive.Year) {
        this.results.push(favorite)
      } else if (this.filterActive.Type && this.filterActive.Year) {
        if (this.filteredTypeItems.includes(favorite.Type) && this.filteredYearItems.includes(favorite.Year)) {
          this.results.push(favorite)
        }
      } else if (this.filterActive.Type && !this.filterActive.Year) {
        if (this.filteredTypeItems.includes(favorite.Type)) {
          this.results.push(favorite)
        }
      } else if (!this.filterActive.Type && this.filterActive.Year) {
        if (this.filteredYearItems.includes(favorite.Year)) {
          this.results.push(favorite)
        }
      }
    }
  }
}