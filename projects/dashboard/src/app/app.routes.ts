import { Routes } from '@angular/router';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { HttpOnlyCookieGuard } from '@dashboard/core/guards';

export const routes: Routes = [
    {
        path:'login',
        loadChildren: () => import('./login-page/login-page.routes').then(m => m.routes),
    },
    {
        path:'settings',
        canActivate: [HttpOnlyCookieGuard],
        component: SettingsPageComponent
    },{
        path:"**",
        redirectTo:"login"
    }
];
