import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = signal([
    { id: 1, name: 'Milk', price: 1.45 },
    { id: 2, name: 'Bread', price: 3.9 },
    { id: 3, name: 'Tomatoes', price: 2.2 },
  ]);
  filterName = signal('');
  filteredProducts = computed(() => {
    return this.products().filter((product) =>
      product.name
        .toLocaleLowerCase()
        .includes(this.filterName().toLocaleLowerCase())
    );
  });

  changeFilter(event: Event) {
    let newFilterName = (event.target as HTMLInputElement).value;
    this.filterName.set(newFilterName);
  }
}
