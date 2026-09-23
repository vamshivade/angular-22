import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-signal',
  imports: [CommonModule],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  count = signal(0);

  cart = inject(Cart);

  increment() {
    this.count.update((prev) => prev + 1);
  }

  decrement() {
    this.count.update((prev) => prev - 1);
  }

  reset() {
    this.count.set(0);
  }

  theme = signal('green');

  constructor() {
    effect(() => {
      localStorage.setItem('theme', this.theme());
    });
  }

  setTheme() {
    this.theme.update((prev) => (prev === 'green' ? 'red' : 'green'));
  }
}
