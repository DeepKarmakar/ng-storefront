import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendComponent } from './backend.component';
import { RouterModule } from '@angular/router';
// import { MeterialModule } from '../../meterial.module';

@NgModule({
  declarations: [BackendComponent],
  imports: [
    CommonModule,
    RouterModule,
    // MeterialModule
  ]
})
export class BackendModule { }
