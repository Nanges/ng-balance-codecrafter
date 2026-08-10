import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutImports } from '@/ui/primitives/layout';
import { ZardMenuImports } from '@/ui/primitives/menu';
import { ZardButtonComponent } from '@/ui/primitives/button';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { lucideSettings, lucideUserCircle } from '@ng-icons/lucide';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    ZardButtonComponent,
    LayoutImports,
    ZardMenuImports,
    NgIcon
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  viewProviders:[provideIcons({ lucideSettings, lucideUserCircle })]
})
export class DashboardComponent {
  protected readonly collapased = signal<boolean>(false);
}
