import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendComponent } from './frontend.component';
import { RouterModule } from '@angular/router';
import { MeterialModule } from '../../meterial.module';

@NgModule({
  declarations: [FrontendComponent],
  imports: [
    CommonModule,
    RouterModule,
    MeterialModule
  ],
  // exports: [
  //   MeterialModule
  // ]
})
export class FrontendModule { }
