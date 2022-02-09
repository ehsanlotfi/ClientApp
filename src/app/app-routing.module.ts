import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import * as  notfound from '@core/pages';
import { RoutingTreeComponent } from './core/routing-tree.component';
import * as _shareSvc from '@share/services';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./site/site.module').then(mod=>mod.SiteModule)
  },
  {
    path: '',
    loadChildren: () => import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path: 'tree-routing',
    component: RoutingTreeComponent
  },
  {
    path: '**',
    component: notfound.NotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
