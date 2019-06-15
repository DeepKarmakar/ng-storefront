import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { MeterialModule } from 'src/app/meterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule,
    MeterialModule,
    FlexLayoutModule
  ]
})
export class AuthModule { }
