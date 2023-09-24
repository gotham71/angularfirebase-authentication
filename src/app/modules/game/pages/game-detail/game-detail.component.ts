import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from 'src/app/shared/models/game';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  gameID!: string;
  game!: Game;
  showFullDescription = false;

  constructor(private activatedRoute: ActivatedRoute, private gamesService: GamesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.gameID = params['id'];
      this.gameDetails(this.gameID);
    });
  }


  gameDetails(id: string): void {
    this.gamesService.getGameDetail(id)
      .subscribe(
        (resp) => {
          console.log(resp);

          this.game = resp;
        }
      )
  }

  toggleFullText() {
    this.showFullDescription = !this.showFullDescription;
  }

}
