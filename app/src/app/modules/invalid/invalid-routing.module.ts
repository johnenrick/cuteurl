import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvalidComponent } from './invalid.component';

const routes: Routes = [{
  path: '',
  component: InvalidComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvalidRoutingModule { }
