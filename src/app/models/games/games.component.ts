import { GamedetailService } from './../../service/gamedetail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gamedata:any = [];

  constructor(private game:GamedetailService) { }

  ngOnInit(): void {
    this.gamedata = this.game.getData();
    console.log(this.gamedata);
  }

}
