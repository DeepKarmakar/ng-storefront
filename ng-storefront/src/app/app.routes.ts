import { Routes } from '@angular/router';
import { frontendRoutes } from './modules/frontend/frontend.routes';
import { backendRoutes } from './modules/backend/backend.routes';
import { pageNotFoundRoutes } from './modules/page-not-found/page-not-found.routes';

export const routes: Routes = [...frontendRoutes, ...backendRoutes]
