import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class ApiService {
  options: object;

  constructor(private http: HttpClient, router: Router) {
    const headers = {'Content-Type': 'application/json'};
    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `JWT ${token}`;
    }

    this.options = {headers: new HttpHeaders(headers)};
  }

  async post(endpoint: string, data: object) {
    try {
      return await this.http.post(endpoint, data, this.options).toPromise() as any;
    } catch (error) {
      console.error(error);
    }
  }

  async get(endpoint: string, query: object = null) {
    try {
      return await this.http.get(endpoint, this.options).toPromise() as any;
    } catch (error) {
      console.error(error);
    }
  }
}
