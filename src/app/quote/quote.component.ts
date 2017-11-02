import {Component, OnInit} from '@angular/core';
import {Quote} from './quote';
import {QuoteService} from './quote.service';

const QUOTES: Quote[] = [
  {id: 1, title: 'First Quote'},
  {id: 2, title: 'Second Quote'},
  {id: 3, title: 'Third Quote'}
];

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [QuoteService]
})

export class QuoteComponent implements OnInit {
  quotes = QUOTES;

  constructor(private service: QuoteService) {
  }

  ngOnInit() {
    this.service.getQuotes().then(quotes => this.quotes = quotes);
  }
}
