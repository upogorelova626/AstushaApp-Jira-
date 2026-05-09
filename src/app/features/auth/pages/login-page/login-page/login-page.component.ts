import {Component, inject} from '@angular/core';
import {TuiTextfield, TuiButton, TuiInput, TuiIcon} from '@taiga-ui/core';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-login-page',
    imports: [TuiTextfield, TuiButton, TuiInput, TuiIcon],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.less'
})
export class LoginPageComponent {
    authService = inject(AuthService);
}
