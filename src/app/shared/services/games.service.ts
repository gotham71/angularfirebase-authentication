import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIresponse } from '../models/api-response';
import { Game } from '../models/game';
import { Observable, forkJoin, map } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
isoFirstDayOfPreviousMonth!: string;
isoLastDayOfNextMonth!: string;

constructor(private http: HttpClient) { }

  getGamesListByDates(ordering: string, search?: string): Observable<APIresponse<Game>> {
    this.getDates();

    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }


    return this.http.get<APIresponse<Game>>(`${env.api}/games?dates=${this.isoFirstDayOfPreviousMonth},${this.isoLastDayOfNextMonth}`, {
      params: params,
    });
  }

  getGamesList(ordering: string, search?: string): Observable<APIresponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIresponse<Game>>(`${env.api}/games`, {
      params: params,
    });
  }

  getGameDetail(id: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${env.api}/games/${id}`);
    const gameMoviesRequest = this.http.get(`${env.api}/games/${id}/movies`);
    const gameScreenshotsRequest = this.http.get(`${env.api}/games/${id}/screenshots`);

    return forkJoin({
      gameInfoRequest,
      gameMoviesRequest,
      gameScreenshotsRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.results,
          movies: resp['gameMoviesRequest']?.results,
        };
      })
    );
  }

  getPlatformsList(): Observable<any> {
    return this.http.get(`${env.api}/platforms`);
  }

  private getDates() {
    const currentDate = new Date();
    const firstDayOfPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    const lastDayOfNextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0);

    // Convert dates to ISO format
    this.isoFirstDayOfPreviousMonth = firstDayOfPreviousMonth.toISOString().substring(0, 10);
    this.isoLastDayOfNextMonth = lastDayOfNextMonth.toISOString().substring(0, 10);
  }

}
