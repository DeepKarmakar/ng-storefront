import { Route } from '@angular/router';
import { BackendComponent } from './backend.component';

export const backendRoutes: Route[] = [
  {
    path: '',
    component: BackendComponent,
    children: [
      {
        path: 'login',
        loadChildren: 'src/app/modules/backend/pages/auth/auth.module#AuthModule'
      }
    ]
  }
]
