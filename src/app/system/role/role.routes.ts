import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './role.component';
import { RoleIndexComponent } from './role-index/role-index.component';


const route: Routes = [
  {
    path: '',
    component: RoleComponent,
    data: {
      title: 'Role Manager'
    },
    children: [
      {
        path: '',
        component: RoleIndexComponent
      }
    ]
  }
];
export const RoleRouter = RouterModule.forChild(route);
