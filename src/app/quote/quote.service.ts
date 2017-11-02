import {Injectable} from '@angular/core';
import {Quote} from './quote';
import {Http} from '@angular/http';

@Injectable()
export class QuoteService {
  constructor(private http: Http) {
  }

  getQuotes(): Promise<Quote[]> {
    return this.http.get('https://myquotes.io/api/quotes/?page=1')
      .toPromise()
      .then(response => response.json().results as Quote[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
