import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendComponent } from './backend.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MeterialModule } from 'src/app/meterial.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [BackendComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MeterialModule,
    ChartsModule
  ]
})
export class BackendModule { }
