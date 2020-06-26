import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadwalhariiniPageRoutingModule } from './jadwalhariini-routing.module';

import { JadwalhariiniPage } from './jadwalhariini.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadwalhariiniPageRoutingModule
  ],
  declarations: [JadwalhariiniPage]
})
export class JadwalhariiniPageModule {}
