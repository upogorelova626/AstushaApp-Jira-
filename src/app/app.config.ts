import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideTaiga} from '@taiga-ui/core';

import {routes} from './app.routes';
import {credentialsInterceptor} from './features/auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimations(),
        provideTaiga(),
        provideHttpClient(withInterceptors([credentialsInterceptor]))
    ]
};
