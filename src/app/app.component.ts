import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-signals-example';
  price = 19;
  quantity = signal(10);
  // Computed signal is a signal which depends on another signal
  // Computed signal is immutable - non self changed
  // It will be only updated by quantity signal
  // It is automatically updated by dependency quantity signal
  totalPrice = computed(() => this.price * this.quantity());

  changeQuantity(event: Event) {
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber || 0);
  }
}
