import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZardButtonComponent } from '@/ui/primitives/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:`<router-outlet/>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dashboard');
}
