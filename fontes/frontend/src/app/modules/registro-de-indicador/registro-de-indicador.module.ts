import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroDeIndicadorRoutingModule } from './registro-de-indicador-routing.module';
import { RegistroDeIndicadorFormComponent } from './registro-de-indicador-form/registro-de-indicador-form.component';
import { ListRegistroDeIndicadorComponent } from './list-registro-de-indicador/list-registro-de-indicador.component';


@NgModule({
  declarations: [
    RegistroDeIndicadorFormComponent,
    ListRegistroDeIndicadorComponent
  ],
  imports: [
    CommonModule,
    RegistroDeIndicadorRoutingModule
  ]
})
export class RegistroDeIndicadorModule { }
