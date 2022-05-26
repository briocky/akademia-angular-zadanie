import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompletionandsearchRoutingModule } from './autocompletionandsearch-routing.module';
import { AutocompletionandsearchComponent } from './autocompletionandsearch.component';

@NgModule({
  imports: [CommonModule, AutocompletionandsearchRoutingModule],
  declarations: [AutocompletionandsearchComponent],
})
export class AutocompletionandsearchModule {}
