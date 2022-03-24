import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormasPage } from './formas.page';

const routes: Routes = [
  {
    path: '',
    component: FormasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormasPageRoutingModule {}
