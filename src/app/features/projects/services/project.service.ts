import {inject, Injectable} from '@angular/core';
import {
    CreateProjectRequest,
    ProjectResponse
} from '../interfaces/project.interface';
import {HttpClient} from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private readonly httpClient = inject(HttpClient);

    private readonly baseApiUrl = 'http://localhost:3000';

    createProject(payload: CreateProjectRequest) {
        return this.httpClient.post<ProjectResponse>(
            `${this.baseApiUrl}/projects`,
            payload
        );
    }
}
