import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  query: string | null = ''
  startSearch = false

  constructor(private route: ActivatedRoute) {
    this.query = route.snapshot.paramMap.get('query')
  }

  ngOnInit(): void {
  }

  handleQuery(query: string) {
    this.query = query
    this.startSearch = true
  }
}
