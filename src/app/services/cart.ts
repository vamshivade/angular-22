import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  price = signal(100);

  quantity = signal(1);

  total = computed(() => {
    return this.price() * this.quantity();
  });

  readOnlyQuantity = this.quantity.asReadonly();

  constructor() {
    effect(() => {
      localStorage.setItem('total-cart', this.total().toString());
    });
  }

  increaseQuantity() {
    this.quantity.update((prev) => prev + 1);
  }

  decreaseQuantity() {
    this.quantity.update((prev) => prev - 1);
  }

  resetQuantity() {
    this.quantity.set(1);
  }

  changePrice() {
    this.price.update((prev) => prev + 100);
  }
}


