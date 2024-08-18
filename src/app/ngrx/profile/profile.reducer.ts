import { ProfileState } from './profile.state';
import { createReducer, on } from '@ngrx/store';
import * as ProfileAction from './profile.action';

const initialState: ProfileState = {
  profiles: [],
  profile: null,
  isLoading: false,
  error: '',
};

export const profileReducer = createReducer(
  initialState,
  on(ProfileAction.getAllProfiles, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProfileAction.getAllProfilesSuccess, (state, { profiles }) => {
    return {
      ...state,
      profiles: profiles,
      isLoading: false,
    };
  }),
  on(ProfileAction.getAllProfilesFailed, (state, fail) => {
    return {
      ...state,
      error: fail.error,
      isLoading: false,
    };
  }),
  on(ProfileAction.getOneProfile, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ProfileAction.getOneProfileSuccess, (state, { profile }) => {
    return {
      ...state,
      profile: profile,
      isLoading: false,
    };
  }),
  on(ProfileAction.getOneProfileFailed, (state, fail) => {
    return {
      ...state,
      error: fail.error,
      isLoading: false,
    };
  }),
);
