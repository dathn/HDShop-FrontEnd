import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';

import { SystemRoutes } from './system.routes';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutes
  ],
  declarations: [
    SystemComponent
  ]
})
export class SystemModule { }
