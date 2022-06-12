import {  OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';

import * as _store from '@share/stores';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private readonly router: Router,
    private iconSetService: IconSetService,
    private readonly userStore: _store.UserStore) {
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit() {
  }

}
