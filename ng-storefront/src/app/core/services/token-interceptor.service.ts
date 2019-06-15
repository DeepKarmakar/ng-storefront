import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) { }

  intercept(req, next) {
    let authService = this._injector.get(AuthService);
    console.log(authService.getToken);

    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `bareer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizeReq)
  }
}
