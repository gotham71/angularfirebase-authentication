import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing-module';
import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from 'src/app/shared/components/loading-spinner/loading-spinner.component';
import { SelectPlatformsComponent } from 'src/app/shared/components/select-platforms/select-platforms.component';


@NgModule({
  declarations: [
    HomePageComponent,
    NavBarComponent,
    LoadingSpinnerComponent,
    SelectPlatformsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
