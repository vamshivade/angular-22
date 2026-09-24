import { Component, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // 1. Input()
  username = input.required<string>();
  quantityValue = input<number>(0);

  // 2. Output()
  quantity = output<number>();

  quantityChange = signal(0);

  emitQuantity() {
    this.quantity.emit(this.quantityValue() + 1);
  }

  // 3. Model
  childQuantity = model<number>(1);

  increase() {
    this.childQuantity.update((prev) => prev + 10);
  }

  decrease() {
    this.childQuantity.update((prev) => prev - 5);
  }
}
