import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutobahnSelectionComponent } from './autobahn-selection/autobahn-selection.component';
import { AutobahnViewComponent } from './autobahn-view/autobahn-view.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { AutobahnRoutingModule } from './autobahn-routing.module';



@NgModule({
  declarations: [
    AutobahnSelectionComponent,
    AutobahnViewComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    AutobahnRoutingModule
  ]
})
export class AutobahnModule { }
