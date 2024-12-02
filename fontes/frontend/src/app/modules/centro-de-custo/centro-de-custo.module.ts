import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentroDeCustoRoutingModule } from './centro-de-custo-routing.module';
import { CentroDeCustoFormComponent } from './centro-de-custo-form/centro-de-custo-form.component';
import { ListCentroDeCustoComponent } from './list-centro-de-custo/list-centro-de-custo.component';


@NgModule({
  declarations: [
    CentroDeCustoFormComponent,
    ListCentroDeCustoComponent
  ],
  imports: [
    CommonModule,
    CentroDeCustoRoutingModule
  ]
})
export class CentroDeCustoModule { }
