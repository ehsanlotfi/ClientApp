import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as _siteTpl from '@site/templates';
import * as _sitePages from '@site/pages';

export const routes: Routes = [
  {
    path: '', component: _siteTpl.DefaultTemplateComponent,
    children: [
      { path: '',  component: _sitePages.HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
