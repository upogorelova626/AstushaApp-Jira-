import {Component} from '@angular/core';
import {TuiIcon, TuiButton} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
@Component({
    selector: 'app-delete-profile',
    imports: [TuiIcon, TuiAvatar, TuiButton],
    templateUrl: './delete-profile.component.html',
    styleUrl: './delete-profile.component.less'
})
export class DeleteProfileComponent {}
