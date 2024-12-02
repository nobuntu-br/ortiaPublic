import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoPadraoRoutingModule } from './historico-padrao-routing.module';
import { HistoricoPadraoFormComponent } from './historico-padrao-form/historico-padrao-form.component';
import { ListHistoricoPadraoComponent } from './list-historico-padrao/list-historico-padrao.component';


@NgModule({
  declarations: [
    HistoricoPadraoFormComponent,
    ListHistoricoPadraoComponent
  ],
  imports: [
    CommonModule,
    HistoricoPadraoRoutingModule
  ]
})
export class HistoricoPadraoModule { }
