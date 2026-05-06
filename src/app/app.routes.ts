import {Routes} from '@angular/router';
import {LoginPageComponent} from './features/auth/pages/login-page/login-page.component';
import {CreateAccountComponent} from './features/auth/pages/login-page/create-account/create-account.component';
import {ForgotPasswordComponent} from './features/auth/pages/login-page/forgot-password/forgot-password.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginPageComponent
    },
    {
        path: 'createaccount',
        component: CreateAccountComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    }
];
