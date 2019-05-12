import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { MeterialModule } from '../../../../meterial.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  }
]

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MeterialModule,
    FormsModule
  ]
})
export class AuthModule { }
