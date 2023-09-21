import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-favorite',
  templateUrl: './edit-favorite.component.html',
  styleUrls: ['./edit-favorite.component.css']
})
export class EditFavoriteComponent implements OnInit {
  @Input() postIndex: any
  @Output() updateFavorite = new EventEmitter<any>()
  @Output() cancelUpdateFavorite = new EventEmitter<any>()
  currentFavs: any[] = []
  favorite: any
  description: string

  constructor() {
    this.postIndex = 0
    this.description = ''
  }
  ngOnInit(): void {
    const localFavs: any = localStorage.getItem('favs')
    if (localFavs) {
      const favs = JSON.parse(localFavs)
      this.currentFavs = favs
    }
    this.favorite = this.currentFavs[this.postIndex]
  }

  handleUpdateFavorite() {
    this.favorite.description = this.description
    this.updateFavorite.emit(this.favorite)
  }
  handleCancelUpdateFavorite() {
    this.cancelUpdateFavorite.emit()
  }
}
