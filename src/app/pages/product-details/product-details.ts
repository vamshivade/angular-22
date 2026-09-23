import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  productId: string | null = null;
  category: string | null = null;
  sort: string | null = null;

  ngOnInit(): void {
    // Read route parameter
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');

      console.log('Product ID:', this.productId);
    });

    // Read query parameters
    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      this.category = queryParams.get('category');
      this.sort = queryParams.get('sort');

      console.log('Category:', this.category);
      console.log('Sort:', this.sort);
    });
  }
}
