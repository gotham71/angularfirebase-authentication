import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModuleRoutes } from './game-routing-module';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { AppPipesModule } from 'src/app/shared/pipes/app-pipes-module';

@NgModule({
  declarations: [
    GameDetailComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModuleRoutes,
    AppPipesModule,
  ]
})
export class GameModule { }
