import { Component, computed, inject, signal } from '@angular/core';
import { ZardButtonComponent } from '@/ui/primitives/button';
import { ZardCardComponent } from '@/ui/primitives/card'
import { ZardFormFieldComponent, ZardFormLabelComponent, ZardFormControlComponent } from '@/ui/primitives/form';
import { ZardInputComponent } from '@/ui/primitives/input';
import { ZardInputGroupComponent, ZardInputGroupImports } from '@/ui/primitives/input-group';
import { ZardAlertComponent } from '@/ui/primitives/alert';
import { ZardButtonGroupComponent } from '@/ui/primitives/button-group'
import { EDarkModes, ZardDarkMode } from "@/ui/primitives/services"
import { DarkModeSwitchComponent } from '@/ui/components/dark-mode-switch'
import { AuthApiService, GetTokenRequest } from 'api'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconType, NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlertTriangle, lucideEye, lucideEyeOff, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  imports: [
    ZardButtonComponent,
    ZardCardComponent,
    ZardInputComponent,
    ZardInputGroupComponent,
    ZardFormFieldComponent,
    ZardFormLabelComponent,
    ZardFormControlComponent,
    ZardAlertComponent,
    ZardButtonGroupComponent,
    ReactiveFormsModule,
    ...ZardInputGroupImports,
    NgIcon,
    DarkModeSwitchComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  viewProviders: [provideIcons({ lucideAlertTriangle, lucideEye, lucideEyeOff, lucideSun, lucideMoon })]
})
export class LoginPageComponent {
  readonly #api = inject(AuthApiService);

  protected readonly form = new FormGroup({
    name: new FormControl<string>('', {validators: Validators.required}),
    password: new FormControl<string>('', { validators: Validators.required})
  });

  protected readonly loading = signal<boolean>(false);
  protected readonly showInvalidCredentials = signal<boolean>(false);
  protected readonly showServiceUnavailable = signal<boolean>(false);
  protected readonly isPasswordHidden = signal<boolean>(true);

  submit(){
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.showInvalidCredentials.set(false);
    this.showServiceUnavailable.set(false);

    this.#api.login({
      user:this.form.value
    } as GetTokenRequest)
    .subscribe({
      error:(err: HttpErrorResponse) => {
        this.loading.set(false);

        if(err.status === 401){
          this.showInvalidCredentials.set(true);
          this.form.reset();
          return;
        }

        this.showServiceUnavailable.set(true);
      },
      next:() => {
        // TODO
      }
    });
  }

  protected isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field?.invalid && (field?.dirty || field?.touched));
  }
}
