import {LoginComponent} from './user/login/login.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuoteComponent} from './quote/quote.component';
import {SignupComponent} from './user/signup/signup.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'quotes', component: QuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
