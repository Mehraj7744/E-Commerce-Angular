
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailServiceService } from 'src/app/services/product-detail-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductDetailServiceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (res) => {
          this.product = res;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
    }
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0); // full stars
  }

  getHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5; // half star
  }
}
