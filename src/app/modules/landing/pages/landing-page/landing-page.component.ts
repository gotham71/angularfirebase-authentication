import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIresponse } from 'src/app/shared/models/api-response';
import { Game } from 'src/app/shared/models/game';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public games: Array<Game> = [];
  public sort!: string;

  constructor(
    private gamesService: GamesService,
    private activatedRouted: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activatedRouted.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      } else {
        this.searchGames('metacrit');
      }
    });


  }

  searchGames(sort: string, search: string = '') {
    if (search === '') {
      this.gamesService
        .getGamesListByDates(sort, search)
        .subscribe((gamesList: APIresponse<Game>) => {
          this.games = gamesList.results;
      });
    } else {
      this.gamesService
        .getGamesList(sort, search)
        .subscribe((gamesList: APIresponse<Game>) => {
          this.games = gamesList.results;
      });
    }
  }

  openGameDetails(id: string): void {
    console.log(id);

    this.route.navigate(['game', id]);
  }

}
