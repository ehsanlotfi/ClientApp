import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AgGridMaster } from "@admin/partial-pages/aggrid-master";

import { GridOptions } from 'ag-grid-community';
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

  columns = [
    {
      field: "userId", 
      headerName: "userId", 
      sortable: true, 
      filter: 'agTextColumnFilter',  
     },{
      field: "id", 
      headerName: "id", 
      sortable: true, 
      filter: 'agTextColumnFilter',  
     },{
      field: "title", 
      headerName: "title", 
      sortable: true, 
      filter: 'agTextColumnFilter',  
     },{
      field: "body", 
      headerName: "body", 
      sortable: true, 
      filter: 'agTextColumnFilter',  
     }
  ];



  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.userService.getList().subscribe((res) => {
        this.rowData = res;
      })
  }
  

}

