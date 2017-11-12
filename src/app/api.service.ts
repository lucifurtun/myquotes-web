import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {apiPoints} from "../environments/environment";

@Injectable()
export class ApiService {
  options: object

  constructor(private http: HttpClient, router: Router) {
    let headers = {'Content-Type': 'application/json'}
    let token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `JWT ${token}`;
    }

    this.options = {headers: new HttpHeaders(headers)};
  }

  async post(endpoint: string, data: object) {
    try {
      let response = await this.http.post(endpoint, data, this.options).toPromise() as any;
      return response
    }
    catch (error) {
      console.error(error);
    }
  }

  async get(endpoint: string, query: object = null) {
    try {
      let response = await this.http.get(endpoint, this.options).toPromise() as any;
      return response;
    }
    catch (error) {
      console.error(error);
    }
  }
}
