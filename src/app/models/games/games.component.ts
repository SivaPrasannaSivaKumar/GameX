import { GamedetailService } from './../../service/gamedetail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  showAll:boolean = true
  showTop:boolean = false;
  showPopular:boolean = false;
  games:any=[];

  constructor(private game:GamedetailService) { }

  ngOnInit(): void {
    this.games = this.game.gamesData();
  }

  showAllGames(){
    this.showAll = !this.showAll;
    this.showTop = false;
    this.showPopular = false;

  }

  showTopGame(){
    this.showTop = !this.showTop;
    this.showAll =false;
    this.showPopular = false;
  }

  showPopularGame(){
    this.showPopular = !this.showPopular;
    this.showAll = false;
    this.showTop = false;
  }

}
