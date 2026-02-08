import { ApplicationConfig, provideBrowserGlobalErrorListeners, SecurityContext } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideMarkdown, SANITIZE } from 'ngx-markdown';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideMarkdown({
      sanitize: {provide: SANITIZE,
      useValue: SecurityContext.NONE }
    }),
    provideHttpClient()
  ]
};