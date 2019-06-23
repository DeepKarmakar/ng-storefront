import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendComponent } from './frontend.component';
import { RouterModule } from '@angular/router';
import { MeterialModule } from '../../meterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [FrontendComponent],
  imports: [
    CommonModule,
    RouterModule,
    MeterialModule,
    FlexLayoutModule
  ],
  // exports: [
  //   MeterialModule
  // ]
})
export class FrontendModule { }
