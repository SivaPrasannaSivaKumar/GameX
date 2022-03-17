import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamedetailService {

  constructor() { }

  getData(){
    return [
      {
        "Name":"Cyberpunk",
        "Image":"https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Stadia, Xbox One, PlayStation 5, Xbox Series X/S",
        "Content":"Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you."
      },
      {
        "Name":"Assassin Creed Origins",
        "Image":"https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1JGRgqSTqKmO1Bveq5p1WO/4ebac6e2922869a4bec387b402977540/acb_searchthumb_Mobile.jpg",
        "Platform":"Microsoft Windows, PlayStation 4, Xbox 360",
        "Content":"Set in mysterious Ancient Egypt, Assassin’s Creed® Origins is a new beginning. Experience a new way to fight while exploring the Great Pyramids and hidden tombs across the country of Ancient Egypt, and encounter many memorable storylines along your journey. And discover the origin story of the Assassin’s Brotherhood."
      },
    ];
  }

}
