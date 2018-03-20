import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';
import { TopMenuComponent } from '../shared/top-menu/top-menu.component';
import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';

import { SystemRoutes } from './system.routes';

import { DataService } from '../core/services/data.service';
import { UtilityService } from '../core/services/utility.service';
import { NotificationService } from '../core/services/notification.service';




@NgModule({
  imports: [
    CommonModule,
    SystemRoutes
  ],
  providers: [
    DataService,
    UtilityService,
    NotificationService
  ]
  ,
  declarations: [
    SystemComponent,
    TopMenuComponent,
    SidebarMenuComponent
  ]
})
export class SystemModule { }
