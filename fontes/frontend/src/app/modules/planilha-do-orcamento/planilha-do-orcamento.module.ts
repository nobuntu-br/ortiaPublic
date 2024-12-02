import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanilhaDoOrcamentoRoutingModule } from './planilha-do-orcamento-routing.module';
import { PlanilhaDoOrcamentoFormComponent } from './planilha-do-orcamento-form/planilha-do-orcamento-form.component';
import { ListPlanilhaDoOrcamentoComponent } from './list-planilha-do-orcamento/list-planilha-do-orcamento.component';


@NgModule({
  declarations: [
    PlanilhaDoOrcamentoFormComponent,
    ListPlanilhaDoOrcamentoComponent
  ],
  imports: [
    CommonModule,
    PlanilhaDoOrcamentoRoutingModule
  ]
})
export class PlanilhaDoOrcamentoModule { }
