import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private router = inject(Router);

  viewDetails(productId: number, category: string, sort: string): void {
    this.router.navigate(['/pages/product-details', productId], {
      queryParams: {
        category: category,
        sort: sort,
      },
    });
  }
}
