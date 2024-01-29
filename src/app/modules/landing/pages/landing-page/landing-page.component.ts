import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgxMasonryOptions } from 'ngx-masonry';
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
  public platform!: any;

  constructor(
    private gamesService: GamesService,
    private activatedRouted: ActivatedRoute,
    private route: Router
  ) { }


  masonryOptions: NgxMasonryOptions = {
    //resize: true,
		//initLayout: true,
		//fitWidth: true,

    //transitionDuration: '0.2s',
    //resize: true,
    columnWidth: '.masonry-item',
		gutter: 10,
    initLayout: true,
    //percentPosition: true
  };

  ngOnInit() {
    this.gamesService.currentPlatformSelected.subscribe(platform => {
      this.platform = platform;
      this.activatedRouted.params.subscribe((params: Params) => {
        this.searchGames('-metacritic', params['game-search']);
        // if (params['game-search']) {
        // } else {
        //   this.searchGames('metacrit');
        // }
      });
    });
  }

  searchGames(sort: string, search: string = '') {
    this.gamesService
      .getGamesList(sort, search, this.platform.id)
      .subscribe((gamesList: APIresponse<Game>) => {
        this.games = gamesList.results;
    });
    // if (search === '') {
    //   console.log('1')
    //   this.gamesService
    //     .getGamesListByDates(sort, search, this.platform.id)
    //     .subscribe((gamesList: APIresponse<Game>) => {
    //       this.games = gamesList.results;
    //   });
    // } else {
    //   console.log('2')
    //   this.gamesService.getGamesList(sort, search, this.platform.id)
    //     .subscribe((gamesList: APIresponse<Game>) => {
    //       this.games = gamesList.results;
    //   });
    // }
  }

  openGameDetails(id: string): void {
    this.route.navigate(['game', id]);
  }

}
