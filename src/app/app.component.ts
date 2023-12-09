import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as AutobahnSelectors from './store/states/autobahn.state';
import * as AutobahnActions from './store/actions/autobahn.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public data: any;

  public autobahnData$: Observable<any>;
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
    console.log('app loaded');
    this.store.dispatch(AutobahnActions.loadAutobahnData());
  }
}
