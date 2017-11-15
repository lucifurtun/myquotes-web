import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {QuoteComponent} from './quote/quote.component';
import {LoginComponent} from './user/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import { SignupComponent } from './user/signup/signup.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
