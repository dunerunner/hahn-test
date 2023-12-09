import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AutobahnState {
  data: any;
  loading: boolean;
  error: any;
}

export const selectAutobahnState = createFeatureSelector<AutobahnState>('autobahn');

export const selectAutobahnData = createSelector(
  selectAutobahnState,
  (state: AutobahnState) => state.data
);

export const selectAutobahnLoading = createSelector(
  selectAutobahnState,
  (state: AutobahnState) => state.loading
);

export const selectAutobahnError = createSelector(
  selectAutobahnState,
  (state: AutobahnState) => state.error
);
