import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIresponse } from '../models/api-response';
import { Game } from '../models/game';
import { BehaviorSubject, Observable, forkJoin, map } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {

private platformSelected = new BehaviorSubject('');
currentPlatformSelected = this.platformSelected.asObservable();
private searchQuery = new BehaviorSubject('');
currentSarchQuery = this.platformSelected.asObservable();

isoFirstDayOfPreviousMonth!: string;
isoLastDayOfNextMonth!: string;

constructor(private http: HttpClient) { }
  getPlatformSelected(platform: any) {
    this.platformSelected.next(platform);
  }
  getSearchQuerySelected(searchQuery: string) {
    this.searchQuery.next(searchQuery);
  }

  getGamesList(ordering: string, search?: string, platform?: number): Observable<APIresponse<Game>> {
    this.getDates();

    let params = new HttpParams().set('search_exact', true).set('search_precise', true);

    if (platform) {
      params =  params.set('parent_platforms', platform);
    }

    if (search) {

      console.log('something ->', search);
      params = params.set('search', search).set('ordering', ordering);
      return this.http.get<APIresponse<Game>>(`${env.api}/games`, {
        params: params,
      });
    } else {
      console.log('empty');

      return this.http.get<APIresponse<Game>>(`${env.api}/games?dates=${this.isoFirstDayOfPreviousMonth},${this.isoLastDayOfNextMonth}`, {
        params: params,
      });
    }
  }

  // getGamesList(ordering: string, search?: string, platform?: number): Observable<APIresponse<Game>> {
  //   console.log('getGamesList')

  //   let params = new HttpParams().set('ordering', ordering).set('search_exact', true).set('search_precise', true);

  //   if (search) {
  //     params =  params.set('search', search);
  //   }

  //   if (platform) {
  //     params =  params.set('parent_platforms', platform);
  //   }
  //   return this.http.get<APIresponse<Game>>(`${env.api}/games`, {
  //     params: params,
  //   });
  // }

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
