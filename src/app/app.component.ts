import { Component, effect, signal } from '@angular/core';
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
  theme = signal('light');
  label = this.theme();

  constructor() {
    // Effect work as a listener
    effect(()=> {
      // Whenever we change a theme signal anywhere in the code
      // This effect will run
      // Why? Because we are using the value of the signal here: this.label = this.theme();
      // In the other words, effect depends on the theme signal
      this.label = this.theme();
    })
    // The effect will at least run once
  }

  toggleDarkmode() {
    // this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
    this.theme.update((currentValue) =>
      currentValue === 'light' ? 'dark' : 'light'
    );
  }
}
