import { ZardDropdownMenuItemComponent } from './dropdown-item.component';
import { ZardDropdownMenuContentComponent } from './dropdown-menu-content.component';
import {
  ZardDropdownMenuCheckboxItemComponent,
  ZardDropdownMenuGroupComponent,
  ZardDropdownMenuRadioGroupComponent,
  ZardDropdownMenuRadioItemComponent,
  ZardDropdownMenuSeparatorComponent,
  ZardDropdownMenuShortcutComponent,
} from './dropdown-primitives.component';
import { ZardDropdownDirective } from './dropdown-trigger.directive';
import { ZardDropdownMenuComponent } from './dropdown.component';
import { ZardMenuLabelComponent } from '@/ui/primitives/menu';
import { ZardMenuShortcutComponent } from '@/ui/primitives/menu';

export const ZardDropdownImports = [
  ZardDropdownMenuComponent,
  ZardDropdownMenuItemComponent,
  ZardDropdownMenuContentComponent,
  ZardDropdownMenuGroupComponent,
  ZardDropdownMenuSeparatorComponent,
  ZardDropdownMenuShortcutComponent,
  ZardDropdownMenuCheckboxItemComponent,
  ZardDropdownMenuRadioGroupComponent,
  ZardDropdownMenuRadioItemComponent,
  ZardMenuLabelComponent,
  ZardMenuShortcutComponent,
  ZardDropdownDirective,
] as const;
