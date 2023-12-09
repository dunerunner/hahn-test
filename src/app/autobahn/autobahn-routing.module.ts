import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutobahnViewComponent } from './autobahn-view/autobahn-view.component';

const routes: Routes = [
  {
    path: '',
    component: AutobahnViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutobahnRoutingModule { }
