import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { GameDetailComponent } from '@modules/game/pages/game-detail/game-detail.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'search/:game-search', component: LandingPageComponent },
  { path: 'game/:id', component: GameDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
