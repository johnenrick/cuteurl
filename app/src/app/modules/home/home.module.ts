import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CutifierComponent } from './cutifier/cutifier.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HomeComponent,
    CutifierComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
