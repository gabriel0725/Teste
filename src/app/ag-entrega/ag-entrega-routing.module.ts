import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgEntregaPage } from './ag-entrega.page';

const routes: Routes = [
  {
    path: '',
    component: AgEntregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgEntregaPageRoutingModule {}
