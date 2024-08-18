import { Injectable } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import * as ProfileAction from './profile.action';

@Injectable()
export class ProfileEffect {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
  ) {}

  getAllProfiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileAction.getAllProfiles),
      mergeMap(() => {
        return this.profileService.getAllProfiles().pipe(
          map((profiles) =>
            ProfileAction.getAllProfilesSuccess({ profiles: profiles }),
          ),
          catchError((error) =>
            of(ProfileAction.getAllProfilesFailed({ error: error })),
          ),
        );
      }),
    );
  });

  getOneProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileAction.getOneProfile),
      switchMap((action) => {
        return this.profileService.getOneProfile(action.id).pipe(
          map((profile) =>
            ProfileAction.getOneProfileSuccess({ profile: profile }),
          ),
          catchError((error) =>
            of(ProfileAction.getOneProfileFailed({ error: error })),
          ),
        );
      }),
    );
  });

  addProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileAction.addProfile),
      switchMap((action) => {
        return this.profileService.addProfile(action.profile).pipe(
          map((profile) =>
            ProfileAction.addProfileSuccess({ profile: profile }),
          ),
          catchError((error) =>
            of(ProfileAction.addProfileFailed({ error: error })),
          ),
        );
      }),
    );
  });

  updateProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileAction.updateProfile),
      switchMap((action) => {
        return this.profileService
          .updateProfile(action.profile.id, action.profile)
          .pipe(
            map((profile) =>
              ProfileAction.updateProfileSuccess({ profile: profile }),
            ),
            catchError((error) =>
              of(ProfileAction.updateProfileFailed({ error: error })),
            ),
          );
      }),
    );
  });

  deleteProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileAction.deleteProfile),
      switchMap((action) => {
        return this.profileService.deleteProfile(action.id).pipe(
          map(() => ProfileAction.deleteProfileSuccess({ id: action.id })),
          catchError((error) =>
            of(ProfileAction.updateProfileFailed({ error: error })),
          ),
        );
      }),
    );
  });
}
