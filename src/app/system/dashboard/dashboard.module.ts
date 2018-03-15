import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';

import { DashboardRouter } from './dashboard.routes';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouter
  ],
  declarations: [
    DashboardComponent,
    DashboardIndexComponent
  ]
})
export class DashboardModule { }
