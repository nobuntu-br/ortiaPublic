import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoContabilRoutingModule } from './lancamento-contabil-routing.module';
import { LancamentoContabilFormComponent } from './lancamento-contabil-form/lancamento-contabil-form.component';
import { ListLancamentoContabilComponent } from './list-lancamento-contabil/list-lancamento-contabil.component';


@NgModule({
  declarations: [
    LancamentoContabilFormComponent,
    ListLancamentoContabilComponent
  ],
  imports: [
    CommonModule,
    LancamentoContabilRoutingModule
  ]
})
export class LancamentoContabilModule { }
