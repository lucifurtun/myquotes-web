import {Injectable} from '@angular/core';
import {Quote} from './quote';
import {ApiService} from 'app/api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {apiPoints} from '../../environments/environment';

@Injectable()
export class QuoteService extends ApiService {
  constructor(http: HttpClient, private router: Router) {
    super(http, router);
  }

  getQuotes(): Promise<Quote[]> {
    return this.get(apiPoints.quotes).then(response => response.results as Quote[]);
  }
}
