import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const systemRoutes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'role',
        loadChildren: './role/role.module#RoleModule'
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      },
      {
        path: 'product',
        loadChildren: './product/product.module#ProductModule'
      },
      {
        path: '404',
        loadChildren: './error-page/error-page.module#ErrorPageModule'
      }
    ]
  }
];

export const SystemRoutes = RouterModule.forChild(systemRoutes);
