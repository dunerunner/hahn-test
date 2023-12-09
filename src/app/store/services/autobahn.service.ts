import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AutobahnState } from '../states/autobahn.state';

@Injectable({
  providedIn: 'root',
})
export class AutobahnService {
  private apiUrl = 'https://verkehr.autobahn.de/o/autobahn';

  constructor(
    private http: HttpClient,
    private store: Store<AutobahnState>
  ) {
  }

  // Example method to get data
  getAutobahnData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
