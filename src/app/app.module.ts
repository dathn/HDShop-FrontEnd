import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SystemComponent } from './system/system.component';

import { AppRoutes } from './app.routes';
import { AuthService } from './core/services/auth.service';
import { NotificationService } from './core/services/notification.service';
import { HttpModule, Http } from '@angular/http';
import { AuthGuard } from './core/guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutes
  ],
  providers: [
    AuthGuard,
    AuthService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
