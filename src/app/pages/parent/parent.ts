import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  userName = 'Vamshi';
  quantityValueP = 10;

  parentQuantity = 1;

  getChildQuantity(value: number) {
    this.parentQuantity = value;
  }
}
