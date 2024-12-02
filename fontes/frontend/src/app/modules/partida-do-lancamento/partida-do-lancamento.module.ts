import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidaDoLancamentoRoutingModule } from './partida-do-lancamento-routing.module';
import { PartidaDoLancamentoFormComponent } from './partida-do-lancamento-form/partida-do-lancamento-form.component';
import { ListPartidaDoLancamentoComponent } from './list-partida-do-lancamento/list-partida-do-lancamento.component';


@NgModule({
  declarations: [
    PartidaDoLancamentoFormComponent,
    ListPartidaDoLancamentoComponent
  ],
  imports: [
    CommonModule,
    PartidaDoLancamentoRoutingModule
  ]
})
export class PartidaDoLancamentoModule { }
