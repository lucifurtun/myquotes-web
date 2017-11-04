import {Component, OnInit} from '@angular/core';
import {Quote} from './quote';
import {QuoteService} from './quote.service';


@Component({
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  providers: [QuoteService]
})

export class QuoteComponent implements OnInit {
  quotes: Quote[];

  constructor(private service: QuoteService) {
  }

  ngOnInit() {
    this.service.getQuotes().then(quotes => this.quotes = quotes);
  }
}
