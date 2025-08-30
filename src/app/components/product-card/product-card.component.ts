import { Component, Input } from '@angular/core';
import { Product } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;


   getStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    return Array(fullStars).fill(0);
  }

  /** Returns true if rating has a half star */
  getHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5;
  }
}
