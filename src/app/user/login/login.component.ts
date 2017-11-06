import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {FormGroup} from "@angular/forms";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  login($event) {
    $event.preventDefault();
    console.log(this.form);
    this.http.post('https://myquotes.io/api/login/', JSON.stringify(this.form.value))
      .toPromise()
      .then(response => console.log(response.json()))
      .catch(this.handleError);
  }

  private handleError() {

  }
}
