import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  value: any;
  ngOnInit(): void {
    this.value = localStorage.getItem('Operator');
  }
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
      menuItemDisplayName: 'Applicant List',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'users',
      menuItemCode: 'users',
    },
    {
      id: 1,
      menuItemDisplayName: 'Applicant Details',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'applicantdetails',
      menuItemCode: 'applicantdetails',
    },
    {
      id: 1,
      menuItemDisplayName: 'Add Applicant',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'addapplicant',
      menuItemCode: 'addapplicant',
    },
    {
      id: 1,
      menuItemDisplayName: 'Drag and Drop',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'shoppingBasket',
      menuItemCode: 'shoppingBasket',
    },
    {
      menuItemDisplayName: 'Tabs',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'tabs',
      menuItemCode: 'tabs',
    },

    {
      menuItemDisplayName: 'Rule Builder',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'rulebuilder',
      menuItemCode: 'rulebuilder',
    },
    {
      menuItemDisplayName: 'Rich Textarea',
      menuItemIcon: 'assetsico-1.svg',
      menuItemUrl: 'richTextArea',
      menuItemCode: 'richTextArea',
    },
  ];
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  /**
   * Used for showing side-nav-bar
   *
   */

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }
  /**
   * Used for hiding side-nav-bar
   *
   */
  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
