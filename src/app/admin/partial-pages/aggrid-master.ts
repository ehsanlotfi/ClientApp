import { GridOptions, GridApi, ColDef, GetDataPath } from 'ag-grid-community';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmationDialogComponent } from '@admin/partial-pages/confirmation-dialog/confirmation-dialog';
export class AgGridMaster {
  modalRef: BsModalRef;
  loading = false;
  data = [];

  top = 50;
  skip = 0;
  gridApi: GridApi;
  paginationPageSize = 20;
  rowData = [];

  loadmoreFlag = false;

  overlayLoadingTemplate =
    '<span class="ag-overlay-loading-center">در حال بارگذاری</span>';

  overlayNoRowsTemplate =
    '<span class="ag-overlay-loading-center">رکوردی یافت نشد</span>';

  gridOptions: GridOptions = {
    floatingFilter: false,
    enableRtl: true,
    localeText: agGridLocaleText,
    context: {
      thisComponent: this
    }
  }


  ckeditorConfig = { height: "250px", width: "100%", language: "fa", skin: "kama", removePlugins: "elementspath" };

  constructor(private modalService: BsModalService) { }

  onFilterChanged($event) {

  }

  onGridReady(params) {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();

    var columnDefs = this.gridApi.getColumnDefs();

    this.gridApi.setColumnDefs(columnDefs);

  }

  onRowClicked(item) {

  }



  handleScroll(event) {
    if (!this.loadmoreFlag) return;

    const grid = document.getElementById('defaultGrid');
    if (grid) {
      const gridBody = grid.querySelector('.ag-body-viewport') as any;
      const scrollPos = gridBody.offsetHeight + event.top;
      const scrollDiff = gridBody.scrollHeight - scrollPos;

      if (scrollDiff <= 3) {
        this.skip += this.top;
        this.loadMore(this.skip, this.top);
      }
    }
  }



  setData(data: any[]) {
    this.data = data;
    setTimeout(() => { this.loading = false; }, 250)
  }

  customItems(params) {
    return [];
  }


  openConfirmDialog(row: any) {
    this.modalRef = this.modalService.show(ConfirmationDialogComponent,
      Object.assign({}, { class: 'modal-danger modal-sm modal-dialog-centered', initialState: { row } })
    );
    this.modalRef.content.onClose.subscribe(row => {
      this.removeCell(row);
    })
  }

  getContextMenuItems(params) {

    const custom = params.context.thisComponent.customItems(params);

    var result = [
      {
        name: 'حذف',
        icon: '<span class="ag-icon  ag-icon-cancel text-danger"></span>',
        cssClasses: ['text-danger'],
        action: () => {
          params.context.thisComponent.openConfirmDialog(params.node.data);
        },
      },
      {
        name: 'ویرایش',
        icon: '<span class="ag-icon ag-icon-paste text-primary"></span>',
        cssClasses: ['text-info'],
        action: () => {
          params.context.thisComponent.editCell(params.node.data);
        },
      }
    ];
    return [...result, ...custom, 'copy', 'copyWithHeaders', 'export'];
  }

  removeCell(row) {
    console.log("remove clicked !");
  }

  editCell(row) {
    console.log("edit clicked !");
  }

  loadMore(skip: number, top: number) {
    console.log("End Scroll!");
  }

  pushData(data) {
    if (this.top > data.length) {
      this.loadmoreFlag = false;
    }
    const index = this.gridApi.getDisplayedRowCount();
    this.gridApi.insertItemsAtIndex(index, data);
  };

  getDataPath: GetDataPath = function (data) {
    return data.orgHierarchy;
  };

  ToTree(data: any[], key?: string, parenyKey?: string, nameKey?: string) {

    function treePath(item, arr) {
      arr = [item[nameKey]].concat(arr);
      if (item[parenyKey]) {
        item = data.find(f => f[key] === item[parenyKey]);
        return item ? treePath(item, arr) : arr;
      } else {
        return arr;
      }
    }

    data.forEach(f => {
      f.orgHierarchy = treePath(f, [])
    });

    return data;
  }

}

export enum TypeFilter {
  contains = "@=",
  notContains = "!@=",
  equals = "==",
  notEqual = "!=",
  startsWith = "_=",
  endsWith = "!_=",

}
export enum SortType {
  "asc" = '',
  "desc" = "-"
}



export const agGridLocaleText = {
  "page": "صفحه",
  "more": "مشاهده همه",
  "to": "به",
  "of": "از",
  "next": "بعدی",
  "last": "آخرین",
  "first": "اولین",
  "previous": "قبلی",
  "loadingOoo": "درحال‌بارگذاری...",

  "selectAll": "انتخاب همه",
  "searchOoo": "درحال‌جستجو...",
  "blanks": "خالی",

  "filterOoo": "متن فیلتر",
  "applyFilter": "تایید",
  "equals": "برابر با",
  "notEqual": "نا برابر با",

  "lessThan": "کمتر از ",
  "greaterThan": "مشاهده همه از",
  "lessThanOrEqual": "کمتر‌یا‌برابر با",
  "greaterThanOrEqual": "مشاهده همه‌یا‌برابر با",
  "inRange": "در محدوده",

  "contains": "شامل",
  "notContains": "مخالف با",
  "startsWith": "شروع با",
  "endsWith": "پایان با",

  "group": "گروه بندی",

  "columns": "ستـونها",
  "rowGroupColumns": "laPivot Cols",
  "rowGroupColumnsEmptyMessage": "la drag cols to group",
  "valueColumns": "مقدار ستونها",
  "pivotMode": "laPivot-Mode",
  "groups": "گروهها",
  "values": "مقادیر",
  "pivots": "ضربدری",
  "valueColumnsEmptyMessage": "خالی می باشد",
  "pivotColumnsEmptyMessage": "خالی می باشد",
  "toolPanelButton": "پنل ابزار",

  "noRowsToShow": "سطری موجود نیست",

  "pinColumn": "سنجاق ستون",
  "valueAggregation": "تجمع مقدار",
  "autosizeThiscolumn": "سایز خودکار ستون",
  "autosizeAllColumns": "سایز خودکار ستونها",
  "groupBy": "دسته‌بندی با",
  "ungroupBy": "عدم دسته‌بندی با",
  "resetColumns": "بازنشانی ستونها",
  "expandAll": "بازکردن همه",
  "collapseAll": "جمع‌کردن همه",
  "toolPanel": "جعبه ابزار",
  "export": "خروجی",
  "csvExport": "خروجی csv",
  "excelExport": "خروجی excel",

  "pinLeft": "سنجاق به چپ <<",
  "pinRight": "سنجاق به راست >>",
  "noPin": "عدم سنجاق <>",

  "sum": "جمع",
  "min": "کمترین",
  "max": "مشاهده همه",
  "none": "هیچ‌کدام",
  "count": "تعداد",
  "average": "میانگین",

  "copy": "کپی(Copy)",
  "copyWithHeaders": "کپی با تیترها ",
  "ctrlC": "ctrl+C",
  "paste": "چسباندن(Paste)",
  "ctrlV": "ctrl+V"
};
