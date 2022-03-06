import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AgGridMaster } from "@admin/partial-pages/aggrid-master";

import { ColDef, GridOptions } from 'ag-grid-community';
import { Router } from '@angular/router';
import * as agc from '@admin/partial-pages/ag-grid';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from '@admin/services/user.service';

@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.scss']
})
export class AllUserListComponent extends AgGridMaster {

  constructor(
    private readonly userService: UserService,
    private router: Router,
    modalService: BsModalService
  ) {
    super(modalService);
  }

  rowData = [];
  rowDataDefault = [];

  columnsDefault: ColDef[] = [
    {
      field: "userId",
      headerName: "userId",
      sortable: true,
      filter: 'agTextColumnFilter',
    }, {
      field: "id",
      headerName: "id",
      sortable: true,
      filter: 'agTextColumnFilter',
    }, {
      field: "title",
      headerName: "title",
      sortable: true,
      filter: 'agTextColumnFilter',
    }, {
      field: "body",
      headerName: "body",
      sortable: true,
      filter: 'agTextColumnFilter',
    }
  ];


  columns: ColDef[] = [
    { field: 'name' },
    { field: 'id' },
  ];

  dataTree = [
    { name: "a", id: 1, parent: null },
    { name: "b", id: 2, parent: 1 },
    { name: "c", id: 3, parent: null },
    { name: "d", id: 4, parent: null },
    { name: "e", id: 5, parent: 2 },
    { name: "f", id: 6, parent: 1 },
  ]


  ngOnInit(): void {
    this.getList();
    this.ToTree(this.dataTree);
  }

  getList() {
    this.userService.getList().subscribe((res) => {
      this.rowDataDefault = res;
    })
  }


}

