import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';

import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth', loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '', component: HomePageComponent, loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
