import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgEntregaPageRoutingModule } from './ag-entrega-routing.module';

import { AgEntregaPage } from './ag-entrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgEntregaPageRoutingModule
  ],
  declarations: [AgEntregaPage]
})
export class AgEntregaPageModule {}
