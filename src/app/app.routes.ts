import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'system',
    loadChildren: './system/system.module#SystemModule'
  },
  {
    path: 'system/dashboard',
    loadChildren: './system/dashboard/dashboard.module#DashboardModule'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
