import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  value: any;

  constructor() {}
  menuItems: any = [
    {
      id: 1,
      menuItemDisplayName: 'Dashboard',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'dashboard',
      menuItemCode: 'dashboard',
    },
    {
      id: 1,
      menuItemDisplayName: 'Dashboard 2',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'dashboard2',
      menuItemCode: 'dashboard2',
    },
    {
      id: 1,
      menuItemDisplayName: 'Upload Document',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'process',
      menuItemCode: 'process',
    },
    {
      id: 1,
      menuItemDisplayName: 'Document List',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'voucherlist',
      menuItemCode: 'voucherlist',
    },
    {
      id: 1,
      menuItemDisplayName: 'Add Applicant',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'addapplicant',
      menuItemCode: 'addapplicant',
    },
  ];

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  ngOnInit(): void {}
}
