import { Component } from '@angular/core';
import { ZardButtonComponent } from '@/ui/primitives/button';
import { ZardCardComponent } from '@/ui/primitives/card'

@Component({
  selector: 'app-login-page',
  imports: [ZardButtonComponent, ZardCardComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
