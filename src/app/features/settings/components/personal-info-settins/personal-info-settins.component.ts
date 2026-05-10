import {Component} from '@angular/core';
import {tuiCeil, TuiPlatform} from '@taiga-ui/cdk';
import {
    TuiButtonX,
    TuiCell,
    TuiTitle,
    TuiButton,
    TuiTextfieldComponent,
    TuiIcon,
    TuiInput,
    TuiTextfield
} from '@taiga-ui/core';
import {TuiAvatar, TuiFade} from '@taiga-ui/kit';
import {TuiLabel} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
    selector: 'app-personal-info-settins',
    imports: [
        TuiButton,
        TuiAvatar,
        TuiButton,
        TuiTextfieldComponent,
        TuiInput,
        TuiTextfield,
        TuiLabel,
        TuiTextarea
    ],
    templateUrl: './personal-info-settins.component.html',
    styleUrl: './personal-info-settins.component.less'
})
export class PersonalInfoSettinsComponent {}
