import {inject, Injectable} from '@angular/core';

import {
    AuthResponse,
    LoginRequest,
    MeResponse,
    RegisterRequest
} from '../interfaces/auth.interface';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly httpClient = inject(HttpClient);

    private readonly baseApiUrl = 'http://localhost:3000';

    registration(payload: RegisterRequest) {
        return this.httpClient
            .post<AuthResponse>(`${this.baseApiUrl}/auth/register`, payload)
            .pipe(
                tap(response => {
                    this.saveToken(response.accessToken);
                })
            );
    }

    login(payload: LoginRequest) {
        return this.httpClient
            .post<AuthResponse>(`${this.baseApiUrl}/auth/login`, payload)
            .pipe(
                tap(response => {
                    this.saveToken(response.accessToken);
                })
            );
    }

    logout() {
        localStorage.removeItem('accessToken');
    }

    me() {
        return this.httpClient.get<MeResponse>(`${this.baseApiUrl}/auth/me`);
    }

    isAuth() {
        return Boolean(this.getToken());
    }

    getToken(): string | null {
        return localStorage.getItem('accessToken');
    }

    private saveToken(token: string) {
        localStorage.setItem('accessToken', token);
    }
}
