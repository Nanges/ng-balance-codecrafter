import { Component, inject } from '@angular/core';
import { ZardButtonComponent } from '@/ui/primitives/button';
import { ZardCardComponent } from '@/ui/primitives/card'
import { ZardFormFieldComponent, ZardFormLabelComponent, ZardFormControlComponent } from '@/ui/primitives/form';
import {ZardInputComponent} from '@/ui/primitives/input';
import { AuthApiService, GetTokenRequest } from 'api'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [
    ZardButtonComponent,
    ZardCardComponent,
    ZardInputComponent,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardFormControlComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  readonly #api = inject(AuthApiService);
  protected readonly form = new FormGroup({
    name: new FormControl<string>('', {validators: Validators.required}),
    password: new FormControl<string>('', { validators: Validators.required})
  })

  login(){
    this.#api.login({
      user:this.form.value
    } as GetTokenRequest).subscribe();
  }
}
