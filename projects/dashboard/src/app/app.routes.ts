import { Routes } from '@angular/router';
import { SettingsPageComponent } from './settings-page/settings-page.component';

export const routes: Routes = [
    {
        path:'login',
        loadComponent: () => import('./login-page/login-page.component').then(m => m.LoginPageComponent),
    },
    {
        path:"dashboard",
        loadChildren:() => import('./dashboard/dashboard.routes').then(m => m.routes)
    },
    {
        path:'error',
        loadComponent: () => import('./error-page/error-page.component').then(m => m.ErrorPageComponent)
    },
    {
        path:"**",
        redirectTo:"dashboard"
    }
];
