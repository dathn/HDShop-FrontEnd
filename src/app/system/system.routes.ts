import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const systemRoutes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
    ]
  }
];

export const SystemRoutes = RouterModule.forChild(systemRoutes);
