import {Routes} from '@angular/router';
import {LoginPageComponent} from './features/auth/pages/login-page/login-page/login-page.component';
import {CreateAccountComponent} from './features/auth/pages/login-page/create-account/create-account.component';
import {ForgotPasswordComponent} from './features/auth/pages/login-page/forgot-password/forgot-password.component';
import {AuthPageComponent} from './features/auth/pages/login-page/auth-page/auth-page.component';
import {DashboardPageComponent} from './features/dashboard/pages/dashboard-page/dashboard-page.component';
import {SettingsPageComponent} from './features/settings/settings-page/settings-page.component';

export const routes: Routes = [
    {
        path: '',
        component: AuthPageComponent,
        children: [
            {
                path: 'login',
                component: LoginPageComponent
            },
            {
                path: 'create-account',
                component: CreateAccountComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },

            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardPageComponent
    },
    {
        path: 'settings',
        component: SettingsPageComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login'
    },
    {
        path: '**',
        redirectTo: 'auth/login'
    }
];
