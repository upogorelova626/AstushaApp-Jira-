import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from './services/auth.service';

const baseApiUrl = 'http://localhost:3000';

export const credentialsInterceptor: HttpInterceptorFn = (request, next) => {
    if (!request.url.startsWith(baseApiUrl)) {
        return next(request);
    }

    const requestWithCredentials = request.clone({
        withCredentials: true
    });

    return next(requestWithCredentials);
};
