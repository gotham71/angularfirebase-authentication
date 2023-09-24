import { NgModule } from '@angular/core';
import { EllipsisTogglePipe } from './ellipsis-toggle/ellipsis-toggle.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    EllipsisTogglePipe
  ],
  exports: [
    EllipsisTogglePipe
  ]
})
export class AppPipesModule{}
