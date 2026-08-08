import { Routes } from '@angular/router';
import { SettingsPageComponent } from './settings-page/settings-page.component';

export const routes: Routes = [
    {
        path:'login',
        loadComponent: () => import('./login-page/login-page.component').then(m => m.LoginPageComponent),
    },
    {
        path:'settings',
        component: SettingsPageComponent
    },
    {
        path:'error',
        loadComponent: () => import('./error-page/error-page.component').then(m => m.ErrorPageComponent)
    },
    {
        path:"**",
        redirectTo:"login"
    }
];
