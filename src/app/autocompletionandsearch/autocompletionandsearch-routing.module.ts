import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompletionandsearchComponent } from './autocompletionandsearch.component';

const routes: Routes = [
  { path: '', component: AutocompletionandsearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutocompletionandsearchRoutingModule {
  constructor() {}
}
