import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-routing-module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    NgxMasonryModule,

  ]
})
export class LandingModule { }
