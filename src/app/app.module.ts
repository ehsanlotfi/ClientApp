import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Router } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '@environments/environment';
import { RoutingTreeComponent } from '@core/routing-tree.component';
import { NotFoundComponent } from '@core/pages/not-found/not-found';
import { ShareModule } from '@share/share.module';
import * as _stores from '@share/stores';
import * as _shareSvc from '@share/services';
import { SiteModule } from '@site/site.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    RoutingTreeComponent
  ],
  imports: [
    ShareModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule,
    SiteModule,
    CarouselModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgxPermissionsModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private readonly userStore: _stores.UserStore,
    private readonly router: Router,
    private readonly userStorageSvc: _shareSvc.UserStorageService,
    private readonly permissionsService: NgxPermissionsService) {

  }


}
