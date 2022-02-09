import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import * as _adminPages from '@admin/pages';
import { DefaultTemplateComponent } from '@admin/templates';


export const routes: Routes = [
  {
    path: '', component: DefaultTemplateComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: _adminPages.AllUserListComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
