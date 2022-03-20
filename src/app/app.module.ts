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

import { GamedetailService } from './service/gamedetail.service';
import { CyberpunkComponent } from './GameModules/cyberpunk/cyberpunk.component';
import { OriginComponent } from './GameModules/Assassin/origin/origin.component';
import { UnityComponent } from './GameModules/Assassin/unity/unity.component';
import { SyndicateComponent } from './GameModules/Assassin/syndicate/syndicate.component';
import { RogueComponent } from './GameModules/Assassin/rogue/rogue.component';
import { BrotherhoodComponent } from './GameModules/Assassin/brotherhood/brotherhood.component';
import { HeatComponent } from './GameModules/Nfs/heat/heat.component';
import { CriteriaComponent } from './GameModules/Nfs/criteria/criteria.component';
import { PaybackComponent } from './GameModules/Nfs/payback/payback.component';
import { ApexComponent } from './GameModules/apex/apex.component';
import { PubgComponent } from './GameModules/pubg/pubg.component';
import { ShadowComponent } from './GameModules/Tomb Raider/shadow/shadow.component';
import { RiseComponent } from './GameModules/Tomb Raider/rise/rise.component';
import { TrComponent } from './GameModules/Tomb Raider/tr/tr.component';
import { Rdr2Component } from './GameModules/rdr2/rdr2.component';
import { GhostreconComponent } from './GameModules/ghostrecon/ghostrecon.component';
import { Gta5Component } from './GameModules/gta5/gta5.component';
import { PropnightComponent } from './GameModules/propnight/propnight.component';
import { FifaComponent } from './GameModules/fifa/fifa.component';
import { Nba2k21Component } from './GameModules/nba2k21/nba2k21.component';
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
    CyberpunkComponent,
    OriginComponent,
    UnityComponent,
    SyndicateComponent,
    RogueComponent,
    BrotherhoodComponent,
    HeatComponent,
    CriteriaComponent,
    PaybackComponent,
    ApexComponent,
    PubgComponent,
    ShadowComponent,
    RiseComponent,
    TrComponent,
    Rdr2Component,
    GhostreconComponent,
    Gta5Component,
    PropnightComponent,
    FifaComponent,
    Nba2k21Component
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
