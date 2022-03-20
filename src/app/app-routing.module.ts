import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexComponent } from './GameModules/apex/apex.component';
import { BrotherhoodComponent } from './GameModules/Assassin/brotherhood/brotherhood.component';
import { OriginComponent } from './GameModules/Assassin/origin/origin.component';
import { RogueComponent } from './GameModules/Assassin/rogue/rogue.component';
import { SyndicateComponent } from './GameModules/Assassin/syndicate/syndicate.component';
import { UnityComponent } from './GameModules/Assassin/unity/unity.component';
import { CyberpunkComponent } from './GameModules/cyberpunk/cyberpunk.component';
import { FifaComponent } from './GameModules/fifa/fifa.component';
import { GhostreconComponent } from './GameModules/ghostrecon/ghostrecon.component';
import { Gta5Component } from './GameModules/gta5/gta5.component';
import { Nba2k21Component } from './GameModules/nba2k21/nba2k21.component';
import { CriteriaComponent } from './GameModules/Nfs/criteria/criteria.component';
import { HeatComponent } from './GameModules/Nfs/heat/heat.component';
import { PaybackComponent } from './GameModules/Nfs/payback/payback.component';
import { PropnightComponent } from './GameModules/propnight/propnight.component';
import { PubgComponent } from './GameModules/pubg/pubg.component';
import { Rdr2Component } from './GameModules/rdr2/rdr2.component';
import { RiseComponent } from './GameModules/Tomb Raider/rise/rise.component';
import { ShadowComponent } from './GameModules/Tomb Raider/shadow/shadow.component';
import { TrComponent } from './GameModules/Tomb Raider/tr/tr.component';
import { AboutComponent } from './models/about/about.component';
import { ContactComponent } from './models/contact/contact.component';
import { GamesComponent } from './models/games/games.component';
import { HomeComponent } from './models/home/home.component';
import { LoginComponent } from './models/login/login.component';
import { RegisterComponent } from './models/register/register.component';
import { StartComponent } from './models/start/start.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'start',component:StartComponent},
  {path:'home',component:HomeComponent},
  {path:'games',component:GamesComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cyberpunk',component:CyberpunkComponent},
  {path:'rdr2',component:Rdr2Component},
  {path:'ghostrecon',component:GhostreconComponent},
  {path:'gta5',component:Gta5Component},
  {path:'origin',component:OriginComponent},
  {path:'unity',component:UnityComponent},
  {path:'syndicate',component:SyndicateComponent},
  {path:'rogue',component:RogueComponent},
  {path:'brotherhood',component:BrotherhoodComponent},
  {path:'heat',component:HeatComponent},
  {path:'criteria',component:CriteriaComponent},
  {path:'payback',component:PaybackComponent},
  {path:'apex',component:ApexComponent},
  {path:'pubg',component:PubgComponent},
  {path:'shadow',component:ShadowComponent},
  {path:'tr',component:TrComponent},
  {path:'rise',component:RiseComponent},
  {path:'propnight',component:PropnightComponent},
  {path:'fifa',component:FifaComponent},
  {path:'nba2k21',component:Nba2k21Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
