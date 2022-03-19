import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './models/about/about.component';
import { ContactComponent } from './models/contact/contact.component';
import { GamesComponent } from './models/games/games.component';
import { HomeComponent } from './models/home/home.component';
import { LoginComponent } from './models/login/login.component';
import { OrdergameComponent } from './models/ordergame/ordergame.component';
import { RegisterComponent } from './models/register/register.component';
import { StartComponent } from './models/start/start.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'start',component:StartComponent},
  {path:'home',component:HomeComponent},
  {path:'games',component:GamesComponent},
  {path:'about',component:AboutComponent},
  {path:'ordergame',component:OrdergameComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
