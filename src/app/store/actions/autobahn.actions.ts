// autobahn.actions.ts

import { createAction, props } from '@ngrx/store';
import { AutobahnData } from '../models/autobahn.models';

export const loadAutobahnData = createAction('[Autobahn] Load Data');
export const loadAutobahnDataSuccess = createAction('[Autobahn] Load Data Success', props<{ data: AutobahnData }>());
export const loadAutobahnDataFailure = createAction('[Autobahn] Load Data Failure', props<{ error: any }>());
