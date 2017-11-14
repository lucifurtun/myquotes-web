import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  async login($event, form) {
    $event.preventDefault();

    const body = JSON.stringify(form.value);
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

    try {
      const response = await this.http.post('https://myquotes.io/api/token/new/', body, options).toPromise();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  private handleError() {

  }
}
