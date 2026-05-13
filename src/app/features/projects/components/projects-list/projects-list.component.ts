import {Component, inject, OnInit, signal} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {ProjectService} from '../../services/project.service';
import {ProjectResponse} from '../../interfaces/project.interface';
import {TuiAvatar} from '@taiga-ui/kit';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-projects-list',
    imports: [TuiButton, TuiAvatar, DatePipe],
    templateUrl: './projects-list.component.html',
    styleUrl: './projects-list.component.less'
})
export class ProjectsListComponent implements OnInit {
    private readonly projectService = inject(ProjectService);

    protected readonly loading = signal(false);
    protected readonly projects = signal<ProjectResponse[]>([]);

    ngOnInit(): void {
        this.loadProjects();
    }

    loadProjects() {
        this.loading.set(true);

        this.projectService.getProjects().subscribe({
            next: projects => {
                this.projects.set(projects);
                this.loading.set(false);
            },
            error: () => {
                this.loading.set(false);
            }
        });
    }
}
