import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AgGridMaster } from "@admin/partial-pages/aggrid-master";

import { GridOptions } from 'ag-grid-community';
import { Router } from '@angular/router';
import * as agc from '@admin/partial-pages/ag-grid';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.scss']
})
export class AllUserListComponent extends AgGridMaster {

  constructor(
    private router: Router,
    modalService: BsModalService
  ) {
    super(modalService);
  }

  rowData = [];

  columns = [
    {
      field: "roles",
      headerName: "نقش ها",
      sortable: true,
      filter: 'agTextColumnFilter',
      cellRendererFramework: agc.FlagState,
    }
  ];



  ngOnInit(): void {
    this.getList();
  }

  getList() {
    
  }
  

}

