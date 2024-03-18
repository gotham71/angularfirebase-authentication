import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { AuthRoutingModuleRoutes } from './auth-routing-module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DashboardComponent,
    SignInComponent,
  ],
  imports: [
    AuthRoutingModuleRoutes,
    CommonModule,
    FontAwesomeModule,
  ],
})
export class AuthModule { }
