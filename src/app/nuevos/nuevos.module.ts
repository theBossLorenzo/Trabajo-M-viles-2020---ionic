import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevosPageRoutingModule } from './nuevos-routing.module';

import { NuevosPage } from './nuevos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevosPageRoutingModule
  ],
  declarations: [NuevosPage]
})
export class NuevosPageModule {}
