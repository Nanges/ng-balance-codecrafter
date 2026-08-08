import { Component } from '@angular/core';
import { ZardEmptyComponent } from '@/ui/primitives/empty';
import { ZardSeparatorComponent } from '@/ui/primitives/separator'
import { provideIcons } from '@ng-icons/core';
import { lucideWrench } from '@ng-icons/lucide';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-error-page',
  imports: [ZardEmptyComponent, ZardSeparatorComponent, RouterLink],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css',
  viewProviders:[provideIcons({lucideWrench})]
})
export class ErrorPageComponent {}
