import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homePage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  query = ''
  startSearch = false

  handleQuery(query: string) {
    this.query = query
    this.startSearch = true
  }

}
