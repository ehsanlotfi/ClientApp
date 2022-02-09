import { Component, OnInit } from '@angular/core';
import { routes as site } from '@site/site.routing.module';
import { routes as admin } from '@admin/admin.routing.module';
@Component({
  selector: 'app-root',
  template: `
      <ul class="direction-rtl m-4 text-right">
         <li class="p-2 pointer" *ngFor="let item of list"
              [routerLink]="item.path">{{ item.title }}  <br> <sub class="text-black-50 position-relative">( {{ item.path }} )</sub></li>
      </ul>
    `,
  styles: [`sub { top: -2px }`]
})
export class RoutingTreeComponent implements OnInit {

  list = [];

  ngOnInit() {
    const ls = JSON.parse(JSON.stringify([...[{ path: 'profile', children: site }], ...site, ...[{ path: 'admin', children: admin }]]));
    let flattenArray = this.flatten({ path: '', children: ls }, []);
    this.list = flattenArray.map(f => ({ title: f.title, path: `/${f.p.filter(f => f).join("/")}` })).filter(f => f.path != "/")
  }


  flatten(node, p = [], array = []) {
    const { title, path } = { title: node?.data?.title, path: node?.path };
    const newPath = [...p, path];
    const children = node.children || []
    array.push({  title, p: newPath })
    children.forEach(child => {
      this.flatten(child, newPath, array)
    })
    return array
  }


}
