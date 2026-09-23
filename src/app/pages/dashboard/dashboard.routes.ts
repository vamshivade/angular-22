import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';
import { DashboardHome } from '../dashboard-home/dashboard-home';
import { Settings } from '../settings/settings';
import { Profile } from '../profile/profile';
import { Orders } from '../orders/orders';
import { dashChildGuard } from '../../guards/dash-child-guard';
import { unsavedChangesGuard } from '../../guards/unsaved-changes-guard';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    canActivateChild: [dashChildGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard-home',
        pathMatch: 'full',
      },
      {
        path: 'dashboard-home',
        component: DashboardHome,
      },
      {
        path: 'settings',
        // component: Settings,
        loadComponent: () => import('../settings/settings').then((c) => c.Settings),
      },
      {
        path: 'profile',
        component: Profile,
        canDeactivate:[unsavedChangesGuard]
      },
      {
        path: 'orders',
        component: Orders,
      },
    ],
  },
];
