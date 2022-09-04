import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'invalid',
    loadChildren: () => import('./modules/invalid/invalid.module').then(m => m.InvalidModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
