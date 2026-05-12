import {Component, inject, signal} from '@angular/core';
import {
    TuiIcon,
    TuiButton,
    TuiDialog,
    TuiTitle,
    TUI_DIALOGS_CLOSE
} from '@taiga-ui/core';
import {ProfileService} from '../../services/profile.service';
import {Router} from '@angular/router';
import {merge} from 'rxjs';

@Component({
    selector: 'app-delete-profile',
    imports: [TuiIcon, TuiButton, TuiTitle, TuiDialog],
    templateUrl: './delete-profile.component.html',
    styleUrl: './delete-profile.component.less',
    providers: [
        {
            provide: TUI_DIALOGS_CLOSE,
            useFactory: () => merge(inject(Router).events)
        }
    ]
})
export class DeleteProfileComponent {
    protected readonly profileService = inject(ProfileService);
    protected readonly isDeleteDialogOpen = signal(false);
    private readonly router = inject(Router);

    protected openDeleteDialog(): void {
        this.isDeleteDialogOpen.set(true);
    }

    protected closeDeleteDialog(): void {
        this.isDeleteDialogOpen.set(false);
    }

    deleteProfile() {
        this.profileService.deleteProfile().subscribe({
            next: () => {
                this.closeDeleteDialog();
                this.router.navigate(['/login']);
            }
        });
    }
}
