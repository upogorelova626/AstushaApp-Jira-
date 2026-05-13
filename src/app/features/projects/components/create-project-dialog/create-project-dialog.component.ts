import {Component, computed, inject, signal} from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {TuiActiveZone, TuiDay, TuiObscured} from '@taiga-ui/cdk';
import {
    TUI_VALIDATION_ERRORS,
    TuiButton,
    TuiCalendar,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiInput,
    TuiTextfield,
    tuiDateFormatProvider
} from '@taiga-ui/core';
import {TuiChevron, TuiInputDate, TuiTextarea} from '@taiga-ui/kit';

import {
    PROJECT_PRIORITY_OPTIONS,
    ProjectPriority,
    ProjectPriorityOption
} from '../../../../shared/constants/task-priority-options';
import {ProjectService} from '../../services/project.service';
import {CreateProjectRequest} from '../../interfaces/project.interface';

@Component({
    selector: 'app-create-project-dialog',
    imports: [
        RouterLink,
        ReactiveFormsModule,
        TuiActiveZone,
        TuiButton,
        TuiCalendar,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiIcon,
        TuiInput,
        TuiInputDate,
        TuiObscured,
        TuiTextarea,
        TuiTextfield
    ],
    templateUrl: './create-project-dialog.component.html',
    styleUrl: './create-project-dialog.component.less',
    providers: [
        tuiDateFormatProvider({
            mode: 'dd/mm/yyyy',
            separator: '.'
        }),
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Поле обязательно для заполнения',
                minlength: ({requiredLength}: {requiredLength: number}) =>
                    `Минимальная длина — ${requiredLength} символов`,
                maxlength: ({requiredLength}: {requiredLength: number}) =>
                    `Максимальная длина — ${requiredLength} символов`
            }
        }
    ]
})
export class CreateProjectDialogComponent {
    private readonly projectService = inject(ProjectService);
    private readonly router = inject(Router);

    protected readonly priorityOptions = PROJECT_PRIORITY_OPTIONS;

    protected readonly priorityDropdownOpen = signal(false);

    protected readonly selectedPriority = signal<ProjectPriorityOption>(
        PROJECT_PRIORITY_OPTIONS[1]
    );

    protected readonly priorityButtonLabel = computed(
        () => this.selectedPriority().label
    );

    protected readonly form = new FormGroup({
        title: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        }),
        description: new FormControl('', {
            nonNullable: true,
            validators: [Validators.maxLength(1000)]
        }),
        priority: new FormControl<ProjectPriority>(ProjectPriority.Medium, {
            nonNullable: true
        }),
        deadline: new FormControl(TuiDay.currentLocal(), {
            nonNullable: true,
            validators: [Validators.required]
        }),
        memberIds: new FormControl<string[]>([], {
            nonNullable: true
        })
    });

    protected createProject(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();

            return;
        }

        const rawValue = this.form.getRawValue();

        const payload: CreateProjectRequest = {
            title: rawValue.title,
            description: rawValue.description,
            priority: rawValue.priority,
            deadline: this.formatDeadline(rawValue.deadline),
            memberIds: rawValue.memberIds
        };

        this.projectService.createProject(payload).subscribe({
            next: () => {
                this.router.navigate(['/dashboard']);
            }
        });
    }

    protected onPriorityClick(): void {
        this.priorityDropdownOpen.update(open => !open);
    }

    protected onPriorityObscured(obscured: boolean): void {
        if (obscured) {
            this.priorityDropdownOpen.set(false);
        }
    }

    protected onPriorityActiveZone(active: boolean): void {
        if (!active) {
            this.priorityDropdownOpen.set(false);
        }
    }

    protected onPrioritySelect(priority: ProjectPriorityOption): void {
        this.selectedPriority.set(priority);
        this.form.controls.priority.setValue(priority.value);
        this.priorityDropdownOpen.set(false);
    }

    private formatDeadline(deadline: TuiDay): string {
        const year = deadline.year;
        const month = String(deadline.month + 1).padStart(2, '0');
        const day = String(deadline.day).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }
}
