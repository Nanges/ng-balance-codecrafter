import { ZardButtonComponent } from '@/ui/primitives/button';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePalette } from '@ng-icons/lucide';

@Component({
  selector: 'ui-theme-switch',
  imports: [NgIcon, ZardButtonComponent],
  template:`
    <button type="button" z-button zType="outline" zShape="circle" zSize="icon" aria-label="Switch theme">
      <ng-icon name="lucidePalette"/>
    </button>
  `,
  styles:":host{display:inline-block}",
  providers:[provideIcons({lucidePalette})]
})
export class ThemeSwitchComponent {

}
