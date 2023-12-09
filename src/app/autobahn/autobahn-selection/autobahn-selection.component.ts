import { Component, OnInit } from '@angular/core';
import * as AutobahnSelectors from '../../store/states/autobahn.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AutobahnActions from '../../store/actions/autobahn.actions';
import { AutobahnData } from '../../store/models/autobahn.models';

@Component({
  selector: 'app-autobahn-selection',
  templateUrl: './autobahn-selection.component.html',
  styleUrls: ['./autobahn-selection.component.scss']
})
export class AutobahnSelectionComponent implements OnInit {
  public autobahnData$: Observable<AutobahnData>;
  public loading$: Observable<boolean>;
  public error$: Observable<any>;

  constructor(
    private store: Store,
  ) {
    this.autobahnData$ = this.store.select(AutobahnSelectors.selectAutobahnData);
    this.loading$ = this.store.select(AutobahnSelectors.selectAutobahnLoading);
    this.error$ = this.store.select(AutobahnSelectors.selectAutobahnError);
  }

  ngOnInit(): void {
    this.store.dispatch(AutobahnActions.loadAutobahnData());
  }
}
