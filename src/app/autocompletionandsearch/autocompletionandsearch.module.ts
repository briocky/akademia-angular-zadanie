import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocompletionandsearchRoutingModule } from './autocompletionandsearch-routing.module';
import { AutocompletionandsearchComponent } from './autocompletionandsearch.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AutocompletionandsearchRoutingModule, FormsModule],
  declarations: [AutocompletionandsearchComponent],
})
export class AutocompletionandsearchModule {}
