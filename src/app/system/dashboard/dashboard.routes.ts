import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: '', component: DashboardIndexComponent
      }
    ]
  }
];

export const DashboardRouter = RouterModule.forChild(routes);

