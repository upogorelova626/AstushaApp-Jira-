import {Component, inject, OnInit, signal} from '@angular/core';
import {TuiIcon, TuiButton} from '@taiga-ui/core';
import {RouterLink} from '@angular/router';
import {ProfileService} from '../../../features/settings/services/profile.service';
import {AsyncPipe} from '@angular/common';

@Component({
    selector: 'app-sidebar',
    imports: [TuiIcon, TuiButton, RouterLink, AsyncPipe],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.less'
})
export class SidebarComponent {
    private readonly profileService = inject(ProfileService);
    protected readonly profile$ = this.profileService.profile$;
}
