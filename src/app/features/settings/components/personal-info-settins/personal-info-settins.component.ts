import {Component, inject, OnInit, signal} from '@angular/core';
import {
    TuiButton,
    TuiInput,
    TuiTextfield,
    TuiTextfieldComponent
} from '@taiga-ui/core';
import {TuiAvatar, TuiTextarea} from '@taiga-ui/kit';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import {finalize, take} from 'rxjs';

import {ProfileService} from '../../services/profile.service';

type ProfileFormValue = {
    email: string;
    firstName: string;
    lastName: string;
    position: string;
    about: string;
    avatarUrl: string;
};

@Component({
    selector: 'app-personal-info-settins',
    imports: [
        TuiAvatar,
        TuiButton,
        TuiTextfieldComponent,
        TuiInput,
        TuiTextfield,
        TuiTextarea,
        ReactiveFormsModule
    ],
    templateUrl: './personal-info-settins.component.html',
    styleUrl: './personal-info-settins.component.less'
})
export class PersonalInfoSettinsComponent implements OnInit {
    private readonly profileService = inject(ProfileService);

    protected readonly isEditing = signal(false);
    protected readonly isSaving = signal(false);

    private initialFormValue: ProfileFormValue | null = null;

    protected readonly form = new FormGroup({
        email: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email,
                Validators.maxLength(255)
            ]
        }),
        firstName: new FormControl('', {
            nonNullable: true,
            validators: [Validators.minLength(2), Validators.maxLength(50)]
        }),
        lastName: new FormControl('', {
            nonNullable: true,
            validators: [Validators.minLength(2), Validators.maxLength(50)]
        }),
        position: new FormControl('', {
            nonNullable: true,
            validators: [Validators.minLength(2), Validators.maxLength(100)]
        }),
        about: new FormControl('', {
            nonNullable: true,
            validators: [Validators.maxLength(500)]
        }),
        avatarUrl: new FormControl('', {
            nonNullable: true,
            validators: [Validators.maxLength(500)]
        })
    });

    ngOnInit(): void {
        this.form.disable();

        this.profileService.profile$.pipe(take(1)).subscribe({
            next: profile => {
                const formValue: ProfileFormValue = {
                    email: profile.email,
                    firstName: profile.firstName ?? '',
                    lastName: profile.lastName ?? '',
                    position: profile.position ?? '',
                    about: profile.about ?? '',
                    avatarUrl: profile.avatarUrl ?? ''
                };

                this.form.patchValue(formValue);
                this.initialFormValue = formValue;

                this.form.markAsPristine();
                this.form.markAsUntouched();
            },
            error: error => {
                console.error('Не удалось загрузить профиль', error);
            }
        });
    }

    protected startEditing(): void {
        this.isEditing.set(true);
        this.form.enable();
    }

    protected cancelEditing(): void {
        if (this.initialFormValue) {
            this.form.patchValue(this.initialFormValue);
        }

        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.form.disable();
        this.isEditing.set(false);
    }

    protected saveProfile(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();

            return;
        }

        this.isSaving.set(true);

        const payload = this.form.getRawValue();

        this.profileService
            .editProfile(payload)
            .pipe(
                finalize(() => {
                    this.isSaving.set(false);
                })
            )
            .subscribe({
                next: profile => {
                    const formValue: ProfileFormValue = {
                        email: profile.email,
                        firstName: profile.firstName ?? '',
                        lastName: profile.lastName ?? '',
                        position: profile.position ?? '',
                        about: profile.about ?? '',
                        avatarUrl: profile.avatarUrl ?? ''
                    };

                    this.form.patchValue(formValue);
                    this.initialFormValue = formValue;

                    this.form.markAsPristine();
                    this.form.markAsUntouched();
                    this.form.disable();

                    this.isEditing.set(false);
                },
                error: error => {
                    console.error('Не удалось обновить профиль', error);
                }
            });
    }
}
