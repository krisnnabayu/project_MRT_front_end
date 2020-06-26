import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwalhariiniPage } from './jadwalhariini.page';

const routes: Routes = [
  {
    path: '',
    component: JadwalhariiniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwalhariiniPageRoutingModule {}
