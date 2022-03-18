import { GamedetailService } from './../../service/gamedetail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showAll:boolean = false
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
