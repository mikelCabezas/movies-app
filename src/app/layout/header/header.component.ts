import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() querySearch = new EventEmitter<any>()

  handleQuerySearch(inputQuery: string) {
    this.querySearch.emit(inputQuery)
  }
}
