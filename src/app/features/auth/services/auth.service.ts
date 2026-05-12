import {inject, Injectable} from '@angular/core';

import {
    AuthResponse,
    LoginRequest,
    MeResponse,
    RegisterRequest,
    LogoutResponse
} from '../interfaces/auth.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly httpClient = inject(HttpClient);

    private readonly baseApiUrl = 'http://localhost:3000';

    registration(payload: RegisterRequest) {
        return this.httpClient.post<AuthResponse>(
            `${this.baseApiUrl}/auth/register`,
            payload,
            {withCredentials: true}
        );
    }

    login(payload: LoginRequest) {
        return this.httpClient.post<AuthResponse>(
            `${this.baseApiUrl}/auth/login`,
            payload,
            {withCredentials: true}
        );
    }

    logout() {
        return this.httpClient.post<LogoutResponse>(
            `${this.baseApiUrl}/auth/logout`,
            {},
            {withCredentials: true}
        );
    }

    me() {
        return this.httpClient.get<MeResponse>(`${this.baseApiUrl}/auth/me`, {
            withCredentials: true
        });
    }

    refresh() {
        return this.httpClient.post<AuthResponse>(
            `${this.baseApiUrl}/auth/refresh`,
            {
                withCredentials: true
            }
        );
    }
}
