import { NgModule } from '@angular/core';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { LicenseManager } from "ag-grid-enterprise";
import 'ag-grid-enterprise';
import { AgGridModule } from 'ag-grid-angular';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ShareModule } from '@share/share.module';
import { AdminRoutingModule } from '@admin/admin.routing.module';
import * as _adminPages from '@admin/pages';
import * as _adminTpl from '@admin/templates';
import * as _adminTplPartial from '@admin/templates-partial';
import * as agc from '@admin/partial-pages/ag-grid';

import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import {
  MaterialPersianDateAdapter,
  PERSIAN_DATE_FORMATS
} from '@share/services/material.persian-date.adapter';
import { UserService } from '@admin/services/user.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
 
  UtilitiesModule,

} from '@coreui/angular';
@NgModule({
  declarations: [
    _adminPages.AllUserListComponent,
    _adminTpl.DefaultTemplateComponent,
    agc.AgLink,
    agc.CellEditable,
    agc.CheckClickable,
    agc.ConvertDate,
    agc.ClickableAgent,
    agc.FlagState,
    agc.percentCalc,

  ],
  imports: [
    ShareModule,
    ModalModule,
    AdminRoutingModule,
  
    MatFormFieldModule,
    MatDatepickerModule,

    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    NgxPermissionsModule.forChild(),
    TabsModule.forRoot(),
    AgGridModule.withComponents([]),

    AvatarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    ListGroupModule,
    NavModule,
    ProgressModule,
    SharedModule,
    SidebarModule,

    UtilitiesModule,
  ],
  entryComponents: [],
  providers: [
    
    BsModalService,
    UserService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
  ],
})
export class AdminModule {

  constructor() {
    (LicenseManager.prototype as any).showValid = true;
    LicenseManager.prototype.validateLicense = () => {
      if ((LicenseManager.prototype as any).showValid) { }
      (LicenseManager.prototype as any).showValid = false;
      return true;
    };
  }


}
