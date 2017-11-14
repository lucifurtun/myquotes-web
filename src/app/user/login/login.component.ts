import {Component} from '@angular/core';
import {LoginService} from './login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  constructor(public loginService: LoginService) {
  }

  onSubmit($event, form) {
    $event.preventDefault();

    let body = JSON.stringify(form.value);
    this.loginService.login(body);
  }
}
