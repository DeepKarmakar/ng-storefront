import { Route } from '@angular/router';
import { BackendComponent } from './backend.component';
import { AuthGuard } from '../../core/guard/auth.guard';

export const backendRoutes: Route[] = [
  {
    path: 'dashboard',
    component: BackendComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/modules/backend/pages/dashbhoard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'product',
        loadChildren: 'src/app/modules/backend/pages/product/product.module#ProductModule',
        canActivate: [AuthGuard]
      },
    ]
  }
]
