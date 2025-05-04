import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient to send the feedback message to the backend

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // Providers are used to inject the services into the app and are used to send the feedback message to the backend
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient()
  ]
};
