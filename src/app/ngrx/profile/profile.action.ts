import { createAction, props } from '@ngrx/store';
import { Profile } from '../../models/profile.model';

// All profiles
export const getAllProfiles = createAction('[Profile] Get All Profiles');
export const getAllProfilesSuccess = createAction(
  '[Profile] Get All Profiles Success',
  props<{ profiles: Profile[] }>(),
);
export const getAllProfilesFailed = createAction(
  '[Profile] Get All Profiles Failure',
  props<{ error: string }>(),
);

// One profile
export const getOneProfile = createAction(
  '[Profile] Get One Profile',
  props<{ id: string }>(),
);
export const getOneProfileSuccess = createAction(
  '[Profile] Get One Profile Success',
  props<{ profile: Profile }>(),
);
export const getOneProfileFailed = createAction(
  '[Profile] Get One Profile Failure',
  props<{ error: string }>(),
);

// Add profile
export const addProfile = createAction(
  '[Profile] Add Profile',
  props<{ profile: Profile }>(),
);
export const addProfileSuccess = createAction(
  '[Profile] Add Profile Success',
  props<{ profile: Profile }>(),
);
export const addProfileFailed = createAction(
  '[Profile] Add Profile Failure',
  props<{ error: string }>(),
);

// Update profile
export const updateProfile = createAction(
  '[Profile] Update Profile',
  props<{ profile: Profile }>(),
);
export const updateProfileSuccess = createAction(
  '[Profile] Update Profile Success',
  props<{ profile: Profile }>(),
);
export const updateProfileFailed = createAction(
  '[Profile] Update Profile Failure',
  props<{ error: string }>(),
);

// Delete profile
export const deleteProfile = createAction(
  '[Profile] Delete Profile',
  props<{ id: string }>(),
);
export const deleteProfileSuccess = createAction(
  '[Profile] Delete Profile Success',
  props<{ id: string }>(),
);
export const deleteProfileFailed = createAction(
  '[Profile] Delete Profile Failure',
  props<{ error: string }>(),
);
