import { ClassValue, mergeClasses } from '@/ui/primitives/utils';
import { buttonVariants } from '@/ui/primitives/button';
import { Component, computed, input } from '@angular/core';
import { IconType, NgIcon } from '@ng-icons/core';

@Component({
  selector: 'a[ui-sidebar-button]',
  imports: [NgIcon],
  template:`
    <ng-icon 
      [name]="uiIcon()" 
      [class.text-base]="!collapsed()"
      [class.text-xl]="collapsed()"
      class="transition-all"
    />
    @if(!collapsed()){
      <ng-content/>
    }
  `,
  host:{
    '[class]': 'classes()',
    "[class.w-full]":"!collapsed()"
  }
})
export class SidebarButtonComponent {
  readonly class = input<ClassValue>('');
  readonly uiIcon = input.required<IconType>();
  readonly collapsed = input<boolean>(false);

  protected readonly classes = computed(() =>
    mergeClasses(
      buttonVariants({
        zType: 'ghost',
        zSize: 'default',
        zShape: 'default',
      }),
      this.class(),
      'justify-start'
    ),
  );
}
