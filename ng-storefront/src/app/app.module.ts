import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FrontendModule } from './modules/frontend/frontend.module';
import { BackendModule } from './modules/backend/backend.module';
import { PageNotFoundModule } from './modules/page-not-found/page-not-found.module';
import { MeterialModule } from './meterial.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FrontendModule,
    BackendModule,
    PageNotFoundModule,
    RouterModule.forRoot(routes),
    MeterialModule,
    FormsModule,
    // FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
