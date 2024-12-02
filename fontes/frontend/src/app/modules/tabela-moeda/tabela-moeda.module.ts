import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelaMoedaRoutingModule } from './tabela-moeda-routing.module';
import { TabelaMoedaFormComponent } from './tabela-moeda-form/tabela-moeda-form.component';
import { ListTabelaMoedaComponent } from './list-tabela-moeda/list-tabela-moeda.component';


@NgModule({
  declarations: [
    TabelaMoedaFormComponent,
    ListTabelaMoedaComponent
  ],
  imports: [
    CommonModule,
    TabelaMoedaRoutingModule
  ]
})
export class TabelaMoedaModule { }
