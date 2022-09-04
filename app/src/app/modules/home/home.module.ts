import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CutifierComponent } from './cutifier/cutifier.component';
import { FormsModule } from '@angular/forms';
import { CuteLinkTableComponent } from './cute-link-table/cute-link-table.component';
@NgModule({
  declarations: [
    HomeComponent,
    CutifierComponent,
    CuteLinkTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
