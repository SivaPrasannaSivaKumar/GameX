import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamedetailService {

  constructor() { }


  // Top Games
  gamesData(){
    return [
      {
        "Name":"cyberpunk",
        "Image":"../../assets/Img/g1Cyberpunk.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Shooting",
        "Famous":"Popular Game"
      },
      {
        "Name":"rdr2",
        "Image":"../../assets/Img/g2RedDeadRedemption2.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Adventure Shooting",
        "Famous":"Top Game"
      },
      {
        "Name":"ghostrecon",
        "Image":"../../assets/Img/g3GhostRecon.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Shooting",
        "Famous":"Top Game"
      },
      {
        "Name":"gta5",
        "Image":"../../assets/Img/g4GTA5.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Adventure RolePlay",
        "Famous":"Popular Game"
      },
      {
        "Name":"origin",
        "Image":"../../assets/Img/g5ACOrigin.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Adventure RolePlay",
        "Famous":"Top Game"
      },
      {
        "Name":"unity",
        "Image":"../../assets/Img/g6ACUnity.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Adventure RolePlay",
        "Famous":"Top Game"
      },
      {
        "Name":"syndicate",
        "Image":"../../assets/Img/g7ACSyndicate.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Adventure RolePlay",
        "Famous":"Top Game"
      },
      {
        "Name":"rogue",
        "Image":"../../assets/Img/g8ACRogue.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Adventure RolePlay",
        "Famous":"Top Game"
      },
      {
        "Name":"brotherhood",
        "Image":"../../assets/Img/g9ACBrotherhood.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Adventure RolePlay",
        "Famous":"Top Game"
      },
      {
        "Name":"heat",
        "Image":"../../assets/Img/g10NFSHeat.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Racing",
        "Famous":"Popular Game"
      },
      {
        "Name":"criteria",
        "Image":"../../assets/Img/g11NFSMostWanted.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Racing",
        "Famous":"Popular Game"
      },
      {
        "Name":"payback",
        "Image":"../../assets/Img/g12NFSPayback.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Racing",
        "Famous":"Top Game"
      },
      {
        "Name":"apex",
        "Image":"../../assets/Img/g13Apex.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Shooting",
        "Famous":"Popular Game"
      },
      {
        "Name":"pubg",
        "Image":"../../assets/Img/g14Pubg.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Shooting",
        "Famous":"Popular Game"
      },
      {
        "Name":"shadow",
        "Image":"../../assets/Img/g15TRShadow.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Adventure",
        "Famous":"Top Game"
      },
      {
        "Name":"tr",
        "Image":"../../assets/Img/g16TR.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Adventure",
        "Famous":"Top Game"
      },
      {
        "Name":"rise",
        "Image":"../../assets/Img/g17RiseTR.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"Action Adventure",
        "Famous":"Top Game"
      },
      {
        "Name":"propnight",
        "Image":"../../assets/Img/g18PropNight.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"RolePlay",
        "Famous":"Popular Game"
      },
      {
        "Name":"fifa",
        "Image":"../../assets/Img/g19Fifa.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"RolePlay",
        "Famous":"Popular Game"
      },
      {
        "Name":"nba2k21",
        "Image":"../../assets/Img/g20NBA2K21.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Type":"RolePlay",
        "Famous":"Popular Game"
      }
    ];
  }
}
