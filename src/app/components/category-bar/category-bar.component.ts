import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent implements OnInit {
  categories: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://dummyjson.com/products/categories')
      .subscribe({
        next: (data) => {
          this.categories = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching categories:', err);
          this.loading = false;
        }
      });
  }
}
