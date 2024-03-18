import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing', loadChildren: () => import(`@modules/landing/landing.module`).then( m => m.LandingModule)
  },
  {
    path: 'dashboard', loadChildren: () => import(`@modules/auth/auth.module`).then( m => m.AuthModule)
  },
  {
    path: 'search/:game-search', redirectTo: '/landing/search/:game-search'
  },
  {
    path: 'game/:id', loadChildren: () => import(`@modules/game/game.module`).then( m => m.GameModule)
  },
  {
    path: '**', redirectTo: '/landing'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
