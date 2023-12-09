// autobahn.reducer.ts

import { createReducer, on } from '@ngrx/store';
import * as AutobahnActions from '../actions/autobahn.actions';
import { AutobahnState } from '../states/autobahn.state';

// Define initial state
export const initialState: AutobahnState = {
  data: null,
  loading: false,
  error: null,
};

// Create reducer
export const autobahnReducer = createReducer(
  initialState,
  on(AutobahnActions.loadAutobahnData, (state) => ({ ...state, loading: true, error: null })),
  on(AutobahnActions.loadAutobahnDataSuccess, (state, { data }) => ({ ...state, data, loading: false })),
  on(AutobahnActions.loadAutobahnDataFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
