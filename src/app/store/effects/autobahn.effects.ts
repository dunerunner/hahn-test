// autobahn.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as AutobahnActions from '../actions/autobahn.actions';
import { AutobahnService } from '../services/autobahn.service';

@Injectable()
export class AutobahnEffects {
  loadAutobahnData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AutobahnActions.loadAutobahnData),
      switchMap(() =>
        this.autobahnService.getAutobahnData().pipe(
          map((data) => AutobahnActions.loadAutobahnDataSuccess({ data })),
          catchError((error) => of(AutobahnActions.loadAutobahnDataFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private autobahnService: AutobahnService) {
  }
}
