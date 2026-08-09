import { ZardEmptyComponent } from '@/ui/primitives/empty';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { lucideFileQuestion } from '@ng-icons/lucide';

@Component({
  selector: 'app-not-found-page',
  imports: [ZardEmptyComponent, RouterLink],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css',
  viewProviders:[provideIcons({lucideFileQuestion})]
})
export class NotFoundPageComponent {

}
