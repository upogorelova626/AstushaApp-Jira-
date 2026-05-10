import {Component} from '@angular/core';
import {SidebarComponent} from '../../../../shared/layout/sidebar/sidebar.component';
import {HeaderComponent} from '../../../../shared/layout/header/header.component';

@Component({
    selector: 'app-dashboard-page',
    imports: [SidebarComponent, HeaderComponent],
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.less'
})
export class DashboardPageComponent {}
