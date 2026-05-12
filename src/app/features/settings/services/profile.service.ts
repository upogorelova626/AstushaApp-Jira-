import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {UserProfile, UserProfileRequest} from '../interfaces/profile.interface';
import {
    ChangePasswordRequest,
    SuccessResponse
} from '../interfaces/password.interface';
import {
    BehaviorSubject,
    Observable,
    shareReplay,
    startWith,
    Subject,
    switchMap,
    tap
} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private readonly httpClient = inject(HttpClient);

    private readonly baseApiUrl = 'http://localhost:3000';

    private readonly refreshProfile$ = new Subject<void>();

    readonly profile$ = this.refreshProfile$.pipe(
        startWith(null),
        switchMap(() =>
            this.httpClient.get<UserProfile>(`${this.baseApiUrl}/users/profile`)
        ),
        shareReplay(1)
    );

    editProfile(payload: UserProfileRequest) {
        return this.httpClient
            .patch<UserProfile>(`${this.baseApiUrl}/users/profile`, payload)
            .pipe(tap(() => this.refreshProfile$.next()));
    }

    deleteProfile() {
        return this.httpClient.delete<{success: boolean}>(
            `${this.baseApiUrl}/users/profile`
        );
    }

    changePassword(payload: ChangePasswordRequest) {
        return this.httpClient.patch<SuccessResponse>(
            `${this.baseApiUrl}/users/profile/password`,
            payload
        );
    }
}
