import {Component, inject} from '@angular/core';
import {
    TuiTextfieldComponent,
    TuiIcon,
    TuiButton,
    TuiInput
} from '@taiga-ui/core';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-create-account',
    imports: [TuiTextfieldComponent, TuiIcon, TuiButton, TuiInput],
    templateUrl: './create-account.component.html',
    styleUrl: './create-account.component.less'
})
export class CreateAccountComponent {
    authService = inject(AuthService);
}
