import { EDarkModes, ZardDarkMode } from '@/ui/primitives/services';
import { Component, computed, inject } from '@angular/core';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { ZardButtonComponent } from '@/ui/primitives/button';

@Component({
  selector: 'ui-dark-mode-switch',
  imports: [NgIcon, ZardButtonComponent],
  template:`
    <button type="button" z-button zType="outline" zShape="circle" zSize="icon" aria-label="Switch theme" (click)="darkMode.toggleTheme()">
      <ng-icon [name]="darkModeIcon()"/>
    </button>
  `,
  styles:":host{display:inline-block}",
  viewProviders:[provideIcons({lucideSun, lucideMoon})],
})
export class DarkModeSwitchComponent {
  protected readonly darkMode = inject(ZardDarkMode);
  protected readonly darkModeIcon = computed<IconType>(() => this.darkMode.currentTheme() === EDarkModes.LIGHT ? 'lucideMoon':'lucideSun');
}
