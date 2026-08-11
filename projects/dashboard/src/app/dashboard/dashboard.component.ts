import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutImports } from '@/ui/primitives/layout';
import { ZardMenuImports } from '@/ui/primitives/menu';
import { provideIcons } from "@ng-icons/core";
import { lucideSettings, lucideUserCircle } from '@ng-icons/lucide';
import { DashboardService } from './dashboard.service';
import { SidebarButtonComponent } from '@/ui/components/sidebar-button'

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    LayoutImports,
    ZardMenuImports,
    RouterLink,
    SidebarButtonComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  viewProviders:[
    provideIcons({ lucideSettings, lucideUserCircle }),
    DashboardService
  ]
})
export class DashboardComponent {
  readonly #dashboardService = inject(DashboardService);
  protected readonly collapased = this.#dashboardService.collapsed;
}
