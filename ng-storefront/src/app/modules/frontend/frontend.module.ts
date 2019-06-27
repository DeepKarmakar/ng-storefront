import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendComponent } from './frontend.component';
import { RouterModule } from '@angular/router';
import { MeterialModule } from '../../meterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FrontendComponent],
  imports: [
    CommonModule,
    RouterModule,
    MeterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  // exports: [
  //   MeterialModule
  // ]
})
export class FrontendModule { }
