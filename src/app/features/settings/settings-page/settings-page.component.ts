import {Component} from '@angular/core';
import {SidebarComponent} from '../../../shared/layout/sidebar/sidebar.component';
import {HeaderComponent} from '../../../shared/layout/header/header.component';
import {PersonalInfoSettinsComponent} from '../components/personal-info-settins/personal-info-settins.component';
import {DeleteProfileComponent} from '../components/delete-profile/delete-profile.component';
import {SecuritySettingsComponent} from '../components/security-settings/security-settings.component';
import {ThemeSettingsComponent} from '../components/theme-settings/theme-settings.component';
import {NotificationsSettingsComponent} from '../components/notifications-settings/notifications-settings.component';

@Component({
    selector: 'app-settings-page',
    imports: [
        SidebarComponent,
        HeaderComponent,
        PersonalInfoSettinsComponent,
        DeleteProfileComponent,
        SecuritySettingsComponent,
        ThemeSettingsComponent,
        NotificationsSettingsComponent
    ],
    templateUrl: './settings-page.component.html',
    styleUrl: './settings-page.component.less'
})
export class SettingsPageComponent {}
