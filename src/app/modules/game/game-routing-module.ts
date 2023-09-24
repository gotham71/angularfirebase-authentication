import { Routes, RouterModule } from '@angular/router';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';

const routes: Routes = [
  { path: '',  component: GameDetailComponent },
  { path: 'game/:id',  component: GameDetailComponent }
];

export const GameRoutingModuleRoutes = RouterModule.forChild(routes);
