import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withNavigationErrorHandler } from '@angular/router';

import { routes } from './app.routes';
import { provideZard } from '@/ui/primitives/core';
import { provideHttpClient } from '@angular/common/http';
import { ThemeSwitchService } from '@/ui/theme-switch';
import { provideApiUrl } from '@api';
import { environment } from '../environments/environment';
import { errorNavigationHandler } from './core/error/error-navigation-handler';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,
      withNavigationErrorHandler(errorNavigationHandler)
    ),
    provideZard(),
    provideHttpClient(),
    provideAppInitializer(ThemeSwitchService.initializers),
    provideApiUrl(environment.apiUrl)
  ]
};
