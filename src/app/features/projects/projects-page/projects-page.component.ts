import {Component} from '@angular/core';
import {HeaderComponent} from '../../../shared/layout/header/header.component';
import {SidebarComponent} from '../../../shared/layout/sidebar/sidebar.component';
import {ProjectsStatsComponent} from '../components/projects-stats/projects-stats.component';
import {ProjectsSearchingComponent} from '../components/projects-searching/projects-searching.component';
import {ProjectsListComponent} from '../components/projects-list/projects-list.component';

@Component({
    selector: 'app-projects-page',
    imports: [
        HeaderComponent,
        SidebarComponent,
        ProjectsStatsComponent,
        ProjectsSearchingComponent,
        ProjectsListComponent
    ],
    templateUrl: './projects-page.component.html',
    styleUrl: './projects-page.component.less'
})
export class ProjectsPageComponent {}
