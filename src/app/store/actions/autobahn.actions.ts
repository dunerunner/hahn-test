// autobahn.actions.ts

import { createAction, props } from '@ngrx/store';

export const loadAutobahnData = createAction('[Autobahn] Load Data');
export const loadAutobahnDataSuccess = createAction('[Autobahn] Load Data Success', props<{ data: any }>());
export const loadAutobahnDataFailure = createAction('[Autobahn] Load Data Failure', props<{ error: any }>());
