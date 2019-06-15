import { Route } from '@angular/router';
import { AuthComponent } from './auth.component';


export const authRoutes: Route[] = [
  {
    path: 'login',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/modules/auth/login/login.module#LoginModule'
      }
    ]
  }
]
