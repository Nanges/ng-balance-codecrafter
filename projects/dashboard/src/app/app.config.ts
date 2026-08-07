import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideZard } from '@/ui/primitives/core';
import { provideHttpClient } from '@angular/common/http';
import { ThemeSwitchService } from '@/ui/theme-switch';
import { provideApiUrl } from '@api';
import { environment } from '../environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideZard(),
    provideHttpClient(),
    provideAppInitializer(ThemeSwitchService.initializers),
    provideApiUrl(environment.apiUrl)
  ]
};
