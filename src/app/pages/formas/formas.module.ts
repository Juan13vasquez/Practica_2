import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormasPageRoutingModule } from './formas-routing.module';

import { FormasPage } from './formas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormasPageRoutingModule
  ],
  declarations: [FormasPage]
})
export class FormasPageModule {}
