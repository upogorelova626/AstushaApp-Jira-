import {Component} from '@angular/core';
import {
    TuiTextfieldComponent,
    TuiIcon,
    TuiButton,
    TuiInput
} from '@taiga-ui/core';

@Component({
    selector: 'app-create-account',
    imports: [TuiTextfieldComponent, TuiIcon, TuiButton, TuiInput],
    templateUrl: './create-account.component.html',
    styleUrl: './create-account.component.less'
})
export class CreateAccountComponent {}
