import { Component, OnInit, OnDestroy,AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { navItems } from '@admin/templates-partial';
import { ActivatedRoute, Router } from '@angular/router';
import * as _shareSvc from '@share/services';
import { NgxPermissionsService } from "ngx-permissions";
@Component({
  selector: 'app-default-template',
  templateUrl: './default-template.component.html',
  styleUrls: ['./default-template.component.scss']
})
export class DefaultTemplateComponent implements OnInit, OnDestroy, AfterViewInit {

  public sidebarMinimized = false;
  public navItems = [];
  rightNavFlag = false;
  showNav = true;
  croppedImage: any = '/assets/images/profile.png';

  constructor(
    public activatedroute: ActivatedRoute, private router: Router,
    private cdr: ChangeDetectorRef,
    private readonly ngxPermission: NgxPermissionsService,
 
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }


  ngAfterViewInit() {
    this.navItems = navItems;
    this.cdr.detectChanges();
  }
  ngOnInit(): void {
    const perm = ['admin', 'MODERATOR'];
    let a = this.ngxPermission.loadPermissions(perm);


    navItems.forEach((item, index) => {
      if (item) {

        if (item.permission) {
          this.ngxPermission.hasPermission(item.permission).then(res => {
            if (res != true) {
              item.class = item.class + " d-none";
            }
          });
        }


        if (item && item.children && item.children.length > 0) {

          item.children.forEach((row) => {

            if (row && row.permission) {

              this.ngxPermission.hasPermission(row.permission).then(res => {
                if (res != true) {
                  row.class = item.class + " d-none";
                }
              });
            }


          });


        }

      }

    });
    this.activatedroute.children[0].data.subscribe((data: any) => {
    });

    /* این قسنت برای روت های سطح دوم است */
    if (!!this.activatedroute.children[0].children.length) {
      this.activatedroute.children[0].children[0].data.subscribe((data: any) => {
      });
    }


  }
 
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  ngOnDestroy(): void {
   
  }

}
