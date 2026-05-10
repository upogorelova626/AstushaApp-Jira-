import {Component} from '@angular/core';
import {SidebarComponent} from '../../../shared/layout/sidebar/sidebar.component';
import {HeaderComponent} from '../../../shared/layout/header/header.component';
import {RouterLink} from '@angular/router';
import {PersonalInfoSettinsComponent} from '../components/personal-info-settins/personal-info-settins.component';
import {DeleteProfileComponent} from '../components/delete-profile/delete-profile.component';

@Component({
    selector: 'app-settings-page',
    imports: [
        SidebarComponent,
        HeaderComponent,
        PersonalInfoSettinsComponent,
        DeleteProfileComponent
    ],
    templateUrl: './settings-page.component.html',
    styleUrl: './settings-page.component.less'
})
export class SettingsPageComponent {}
