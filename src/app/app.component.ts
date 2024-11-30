import { Component } from '@angular/core';
import { Product } from './models/product';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  allProducts: Product[] = [
    { id: 1, name: 'Milk', price: 1.45 },
    { id: 2, name: 'Bread', price: 3.9 },
    { id: 3, name: 'Tomatoes', price: 2.2 },
  ];
}
