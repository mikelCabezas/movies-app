import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() querySearch = new EventEmitter<any>()

  menuOpen: boolean = false

  currentRoute = this.router.url
  constructor(private router: Router) { }

  toggleMenu() {
    this.menuOpen ? this.menuOpen = false : this.menuOpen = true;
  }

  handleQuerySearch(inputQuery: string) {
    this.querySearch.emit(inputQuery)
  }
  handleGoToHome() {
    this.router.navigate([''])
  }
  handleGoToFavorites() {
    this.router.navigate(['favorites'])
  }
}
