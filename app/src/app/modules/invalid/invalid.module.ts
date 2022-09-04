import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidComponent } from './invalid.component';
import { InvalidRoutingModule } from './invalid-routing.module';

@NgModule({
  declarations: [
    InvalidComponent
  ],
  imports: [
    CommonModule,
    InvalidRoutingModule
  ]
})
export class InvalidModule { }
