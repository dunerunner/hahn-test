import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { autobahnReducer } from './store/reducers/autobahn.reducer';
import { AutobahnEffects } from './store/effects/autobahn.effects';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      autobahn: autobahnReducer
    }), // Add your reducer here
    EffectsModule.forRoot([AutobahnEffects]), BrowserAnimationsModule, MatCardModule, // Add your effects here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
