import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandoComponent } from './rando/rando.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
    path: '',
    component:StartComponent
  },
  {
    path: 'rando',
    component:RandoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
