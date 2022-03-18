import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamedetailService {

  constructor() { }

  gamesData(){
    return [
      {
        "Name":"Assassin Creed Origins",
        "Image":"https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JGRgqSTqKmO1Bveq5p1WO/4ebac6e2922869a4bec387b402977540/acb_searchthumb_Mobile.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Content":"Set in mysterious Ancient Egypt, Assassin’s Creed® Origins is a new beginning. Experience a new way to fight while exploring the Great Pyramids and hidden tombs across the country of Ancient Egypt, and encounter many memorable storylines along your journey. And discover the origin story of the Assassin’s Brotherhood.",
        "Type":"Action Adventure",
        "Famous":"Top Game"
      },
      {
        "Name":"Need For Speed",
        "Image":"https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/10/game-boxes-game-box-nfs-xl.jpg.adapt.crop1x1.767w.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Stadia, Xbox One, PlayStation 5, Xbox Series X/S, Android",
        "Content":"Need for Speed is a racing video game franchise published by Electronic Arts and currently developed by Criterion Games, the developers of Burnout. The series generally centers around illicit street racing and tasks players to complete various types of races while evading the local law enforcement in police pursuits.",
        "Type":"Racing",
        "Famous":"Top Game"
      },
      {
        "Name":"Red Dead Redemption II",
        "Image":"https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Content":"Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 and follows the exploits of outlaw Arthur Morgan, a member of the Van der Linde gang, in a fictionalized representation of the Western, Midwestern, and Southern United States. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries. The game's epilogue follows fellow gang member John Marston, the protagonist of Red Dead Redemption.",
        "Type":"Action Adventure",
        "Famous":"Top Game"
      },
      {
        "Name":"FIFA",
        "Image":"https://cdn.akamai.steamstatic.com/steam/apps/1506830/ss_2cdf78a2091db6adb7ec405f4c5438fd621266a9.1920x1080.jpg?t=1644868577",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Content":"FIFA (also known as FIFA Football or EA Sports FIFA) is a series of association football video games developed and released annually by Electronic Arts under the EA Sports label. As of 2011, the FIFA franchise has been localised into 18 languages and available in 51 countries. Listed in Guinness World Records as the best-selling sports video game franchise in the world, the FIFA series has sold over 325 million copies as of 2021.",
        "Type":"Sports Simulation",
        "Famous":"Top Game"
      },
      {
        "Name":"Far Cry 6",
        "Image":"https://cdn2.unrealengine.com/tetra-preorder-standard-edition-epic-store-landscape-2560x1440-2560x1440-430970417.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Content":"Far Cry is a franchise of first-person shooter games, all of which have been published by Ubisoft. The first game, Far Cry, was developed by Crytek to premiere their CryEngine software, and released in March 2004. Subsequently, Ubisoft obtained the rights to the franchise and the bulk of the development is handled by Ubisoft Montreal with assistance from other Ubisoft satellite studios. The following games in the series have used a Ubisoft-modified version of the CryEngine, the Dunia Engine, allowing for open world gameplay. In the present, the franchise consists of six mainline games, a standalone expansion, and several spin-offs; additionally, the first game, initially developed for Microsoft Windows, saw a number of ports to video game consoles, which changed several elements and are therefore considered standalone releases.",
        "Type":"Action Shooting Adventure",
        "Famous":"Top Game"
      },
      {
        "Name":"NBA2K21",
        "Image":"https://cdn.akamai.steamstatic.com/steam/apps/1225330/capsule_616x353.jpg?t=1614622937",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360, Android",
        "Content":"NBA 2K21 is a 2020 basketball simulation video game that was developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA). It is the 22nd installment in the NBA 2K franchise and the successor to NBA 2K20, and the predecessor to NBA 2K22.",
        "Type":"Sports Simulation",
        "Famous":"Top Game"
      },
      {
        "Name":"Cyberpunk",
        "Image":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Stadia, Xbox One, PlayStation 5, Xbox Series X/S",
        "Content":"Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
        "Type":"Action-role Shooting",
        "Famous":"Popular Game"
      },
      {
        "Name":"Player Unknown Battle Ground",
        "Image":"https://i.pcmag.com/imagery/reviews/03S9ZRW0TQcpCQLxKx4lUVT-35..v1598017825.png",
        "Platform":"Microsoft Windows, PlayStation 4, Stadia, Xbox One, PlayStation 5, Xbox Series X/S",
        "Content":"PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds, or simply PUBG) is an online multiplayer battle royale game developed and published by PUBG Corporation (current PUBG Studios), a subsidiary of Bluehole (current Krafton). The game is based on previous mods that were created by Brendan PlayerUnknown Greene for other games, inspired by the 2000 Japanese film Battle Royale, and expanded into a standalone game under Greene's creative direction. In the game, up to one hundred players parachute onto an island and scavenge for weapons and equipment to kill others while avoiding getting killed themselves. The available safe area of the game's map decreases in size over time, directing surviving players into tighter areas to force encounters. The last player or team standing wins the round.",
        "Type":"Shooting",
        "Famous":"Popular Game"
      },
      {
        "Name":"PropNight",
        "Image":"https://cdn.akamai.steamstatic.com/steam/apps/1549180/capsule_616x353.jpg?t=1638382563",
        "Platform":"Microsoft Windows",
        "Content":"Propnight is a 4vs1 multiplayer physics-based prop hunt mixed with classic horror survival.In a small provincial town, teenagers continue to disappear mysteriously. But who or what is behind this?",
        "Type":"Thrilling",
        "Famous":"Popular Game"
      },
      {
        "Name":"",
        "Image":"",
        "Platform":"",
        "Content":"",
        "Type":"",
        "Famous":"Popular Game"
      },
      {
        "Name":"",
        "Image":"",
        "Platform":"",
        "Content":"",
        "Type":"",
        "Famous":"Popular Game"
      },
    ];
  }
}
