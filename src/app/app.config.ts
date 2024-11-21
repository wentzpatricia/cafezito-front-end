import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe, registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { CoreModule } from './core/core.module';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(CoreModule),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    DatePipe,
    provideHttpClient(),
  ],
};
