import {Component} from '@angular/core';
import {TuiButton, TuiTextfield, TuiInput} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-projects-searching',
    imports: [
        TuiButton,
        TuiTextfield,
        TuiInput,
        TuiDataListWrapper,
        RouterLink,
        RouterOutlet
    ],
    templateUrl: './projects-searching.component.html',
    styleUrl: './projects-searching.component.less'
})
export class ProjectsSearchingComponent {}
