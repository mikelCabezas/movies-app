import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  query = ''
  startSearch = false

  handleQuery(_query: string) {
    this.query = _query
    this.startSearch = true
  }

}
