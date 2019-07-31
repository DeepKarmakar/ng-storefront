import { Route } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { CartComponent } from './pages/cart/cart.component';

export const frontendRoutes: Route[] = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/modules/frontend/pages/home/home.module#HomeModule'
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  }
]
