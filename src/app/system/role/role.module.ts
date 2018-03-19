import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { RoleIndexComponent } from './role-index/role-index.component';
import { RoleRouter } from './role.routes';

@NgModule({
  imports: [
    CommonModule,
    RoleRouter
  ],
  declarations: [
    RoleComponent,
    RoleIndexComponent
  ]
})
export class RoleModule { }
