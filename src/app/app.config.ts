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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

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
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-web24a-dd777',
        appId: '1:1080636081103:web:0d049c625a848ab91dc8ba',
        storageBucket: 'fir-web24a-dd777.appspot.com',
        apiKey: 'AIzaSyDQqm58ICqjystH-mpHnIuUIRwjAlvOuDY',
        authDomain: 'fir-web24a-dd777.firebaseapp.com',
        messagingSenderId: '1080636081103',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
