import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CatEffect } from './ngrx/cat/cat.effect';
import { catReducer } from './ngrx/cat/cat.reducer';
import { provideHttpClient } from '@angular/common/http';
import { profileReducer } from './ngrx/profile/profile.reducer';
import { ProfileEffect } from './ngrx/profile/profile.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      cat: catReducer,
      profile: profileReducer,
    }),
    provideEffects(CatEffect, ProfileEffect),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
};
