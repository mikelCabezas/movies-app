import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  ngOnInit(): void {
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
  }

  postIndex = 0
  onEditModal = false
  currentFavs: any[] = []
  types: any[] = []
  years: any[] = []

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

  filterElements() {

  }
}
