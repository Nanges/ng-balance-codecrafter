import { Component } from '@angular/core';
import { ZardButtonComponent } from '@/ui/primitives/button';
import { ZardCardComponent } from '@/ui/primitives/card'
import { ZardFormFieldComponent, ZardFormLabelComponent, ZardFormControlComponent } from '@/ui/primitives/form';
import {ZardInputComponent} from '@/ui/primitives/input';

@Component({
  selector: 'app-login-page',
  imports: [
    ZardButtonComponent,
    ZardCardComponent,
    ZardInputComponent,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardFormControlComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
