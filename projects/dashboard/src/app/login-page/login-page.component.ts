import { Component, inject, signal } from '@angular/core';
import { ZardButtonComponent } from '@/ui/primitives/button';
import { ZardCardComponent } from '@/ui/primitives/card'
import { ZardFormFieldComponent, ZardFormLabelComponent, ZardFormControlComponent } from '@/ui/primitives/form';
import { ZardInputComponent } from '@/ui/primitives/input';
import { ZardAlertComponent } from '@/ui/primitives/alert';
import { AuthApiService, GetTokenRequest } from 'api'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideIcons } from '@ng-icons/core';
import { lucideAlertTriangle } from '@ng-icons/lucide';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  imports: [
    ZardButtonComponent,
    ZardCardComponent,
    ZardInputComponent,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardFormControlComponent,
    ZardAlertComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  viewProviders: [provideIcons({ lucideAlertTriangle })]
})
export class LoginPageComponent {
  readonly #api = inject(AuthApiService);
  protected readonly form = new FormGroup({
    name: new FormControl<string>('', {validators: Validators.required}),
    password: new FormControl<string>('', { validators: Validators.required})
  });

  protected readonly loading = signal<boolean>(false);
  protected readonly showInvalidCredentials = signal<boolean>(false);

  login(){
    this.loading.set(true);
    this.showInvalidCredentials.set(false);

    this.#api.login({
      user:this.form.value
    } as GetTokenRequest)
    .subscribe({
      error:(err: HttpErrorResponse) => {
        if(err.status === 401){
          this.showInvalidCredentials.set(true);
          return;
        }
      },
      next:() => {
        // TODO
      },
      complete:() => {
        this.loading.set(false);
      }
    });
  }
}
