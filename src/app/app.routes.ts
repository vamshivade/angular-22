import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

import { PageNotfound } from './pages/page-notfound/page-notfound';
import { authGuard } from './guards/auth-guard';
import { Signal } from './pages/signal/signal';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/signal',
    pathMatch: 'full',
  },

  {
    path: 'pages/signal',
    component: Signal,
  },

  {
    path: 'pages/login',
    component: Login,
  },

  {
    path: 'pages/register',
    component: Register,
  },

  {
    path: 'pages/home',
    component: Home,
  },

  {
    path: 'pages/about',
    // component: About,
    loadComponent: () => import('./pages/about/about').then((c) => c.About),
  },

  {
    path: 'pages/contact',
    // component: Contact,
    loadComponent: () => import('./pages/contact/contact').then((c) => c.Contact),
  },

  // ✅ Lazy loaded
  {
    path: 'pages/products',
    loadComponent: () => import('./pages/products/products').then((m) => m.Products),
  },

  {
    path: 'pages/product-details/:id',
    // component: ProductDetails,
    loadComponent: () =>
      import('./pages/product-details/product-details').then((c) => c.ProductDetails),
  },

  {
    path: 'pages/dashboard',
    // component: Dashboard,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then((c) => c.DASHBOARD_ROUTES),
  },

  {
    path: '**',
    component: PageNotfound,
  },
];
