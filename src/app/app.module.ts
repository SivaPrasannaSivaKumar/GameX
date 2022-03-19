import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './marginals/navbar/navbar.component';
import { FooterComponent } from './marginals/footer/footer.component';
import { HomeComponent } from './models/home/home.component';
import { AboutComponent } from './models/about/about.component';
import { GamesComponent } from './models/games/games.component';
import { LoginComponent } from './models/login/login.component';
import { RegisterComponent } from './models/register/register.component';
import { StartComponent } from './models/start/start.component';
import { ContactComponent } from './models/contact/contact.component';
import { OrdergameComponent } from './models/ordergame/ordergame.component';

import { GamedetailService } from './service/gamedetail.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GamesComponent,
    LoginComponent,
    RegisterComponent,
    StartComponent,
    ContactComponent,
    OrdergameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    GamedetailService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
