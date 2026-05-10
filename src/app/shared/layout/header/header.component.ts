import {Component} from '@angular/core';
import {
    TuiIcon,
    TuiTextfieldComponent,
    TuiInput,
    TuiButton,
    TuiLink
} from '@taiga-ui/core';

import {TuiBreadcrumbs} from '@taiga-ui/kit';

@Component({
    selector: 'app-header',
    imports: [
        TuiIcon,
        TuiTextfieldComponent,
        TuiInput,
        TuiButton,
        TuiBreadcrumbs
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.less'
})
export class HeaderComponent {}
