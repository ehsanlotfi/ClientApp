import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShareModule } from '@share/share.module';
import { SiteRoutingModule } from '@site/site.routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import * as _sitePages from '@site/pages';
import * as _siteTemplate from '@site/templates';


@NgModule({
  declarations: [
    _sitePages.HomeComponent,

    _siteTemplate.DefaultTemplateComponent,

  ],
  imports: [
    ShareModule,
    CarouselModule,
    SiteRoutingModule,
    CarouselModule,
    NgxPermissionsModule.forChild()
  ],
  providers: [
   
  ],
  bootstrap: [],
  exports: []
})
export class SiteModule { }

