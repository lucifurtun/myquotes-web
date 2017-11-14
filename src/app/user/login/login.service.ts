import {Injectable} from '@angular/core';
import {ApiService} from 'app/api.service';
import {HttpClient} from '@angular/common/http';
import {apiPoints} from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable()
export class LoginService extends ApiService {
  constructor(http: HttpClient, private router: Router) {
    super(http, router);
  }

  login(data) {
    this.post(apiPoints.newToken, data).then(response => {
      localStorage.setItem('token', response.token);
      this.router.navigateByUrl('/quotes');
    });
  }
}
