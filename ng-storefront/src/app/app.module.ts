import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { FrontendModule } from './modules/frontend/frontend.module';
import { BackendModule } from './modules/backend/backend.module';
import { AuthModule } from './modules/auth/auth.module';
import { PageNotFoundModule } from './modules/page-not-found/page-not-found.module';
import { MeterialModule } from './meterial.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { AddProductComponent } from './modules/backend/pages/product/add-product/add-product.component';
import { DeleteProductComponent } from './modules/backend/pages/product/delete-product/delete-product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/guard/auth.guard';
import { TokenInterceptorService } from './core/services/token-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FrontendModule,
    BackendModule,
    PageNotFoundModule,
    AuthModule,
    RouterModule.forRoot(routes),
    MeterialModule,
    FormsModule,
    FlexLayoutModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddProductComponent,
    DeleteProductComponent
  ]
})
export class AppModule { }
