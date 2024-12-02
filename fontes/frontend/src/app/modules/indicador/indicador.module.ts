import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadorRoutingModule } from './indicador-routing.module';
import { IndicadorFormComponent } from './indicador-form/indicador-form.component';
import { ListIndicadorComponent } from './list-indicador/list-indicador.component';


@NgModule({
  declarations: [
    IndicadorFormComponent,
    ListIndicadorComponent
  ],
  imports: [
    CommonModule,
    IndicadorRoutingModule
  ]
})
export class IndicadorModule { }
