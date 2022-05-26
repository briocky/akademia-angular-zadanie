import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'autocompletionandsearch', loadChildren: () => import('./autocompletionandsearch/autocompletionandsearch.module').then(m => m.AutocompletionandsearchModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
