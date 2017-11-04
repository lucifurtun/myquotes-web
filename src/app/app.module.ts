import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {QuoteComponent} from './quote/quote.component';
import {LoginComponent} from './user/login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import { SignupComponent } from './user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
