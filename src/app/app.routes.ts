import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

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
    loadChildren: './system/system.module#SystemModule', canActivate: [AuthGuard]
  },
  {
    path: '*',
    redirectTo: 'system/404',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'system/404',
    pathMatch: 'full'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
