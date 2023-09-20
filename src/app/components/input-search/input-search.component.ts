import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {
  @Output() querySearch = new EventEmitter<any>()
  query = ''
  searchResults() {
    this.querySearch.emit(this.query)
  }
}
