import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss'],
})
export class ShoppingBasketComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  items = [
    'Applicant 1',
    'Applicant 2',
    'Applicant 3',
    'Applicant 4',
    'Applicant 5',
  ];

  basket = ['Applicant 6', 'Applicant 7', 'Applicant 8'];
 /**
   * Used for dragdrop items to basket
   *
   * @param {string} value - The item to be dragdrop.
   * @returns {Array} list of items.
   */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
