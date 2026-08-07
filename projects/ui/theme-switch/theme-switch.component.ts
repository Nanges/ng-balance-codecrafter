import { ZardButtonComponent } from '@/ui/primitives/button';
import { ZardMenuImports } from '@/ui/primitives/menu';
import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucidePalette } from '@ng-icons/lucide';
import { ThemeSwitchService } from './theme-switch.service';

@Component({
  selector: 'ui-theme-switch',
  imports: [NgIcon, ZardButtonComponent, ZardMenuImports, NgIcon],
  template:`
    <button type="button" z-button zType="outline" zShape="circle" zSize="icon" aria-label="Switch theme" z-menu zTrigger="click" zPlacement="bottomRight" [zMenuTriggerFor]="themeMenu">
      <ng-icon name="lucidePalette"/>
    </button>
    <ng-template #themeMenu>
      <div z-menu-content class="w-48">
        <button type="button" z-menu-item (click)="themeSwitch.setTheme(null)">
          <ng-icon name="lucideCheck" [class.invisible]="themeSwitch.currentTheme() !== null"/>
          <span>Default</span>
        </button>
        <button type="button" z-menu-item (click)="themeSwitch.setTheme('tulipe')">
          <ng-icon name="lucideCheck" [class.invisible]="themeSwitch.currentTheme() !== 'tulipe'"/>
          <span>Tulipe</span>
        </button>
        <button type="button" z-menu-item (click)="themeSwitch.setTheme('lady')">
          <ng-icon name="lucideCheck" [class.invisible]="themeSwitch.currentTheme() !== 'lady'"/>
          <span>Lady</span>
        </button>
      </div>
    </ng-template>
  `,
  styles:":host{display:inline-block}",
  providers:[provideIcons({lucidePalette, lucideCheck})]
})
export class ThemeSwitchComponent {
  protected readonly themeSwitch = inject(ThemeSwitchService);
}
