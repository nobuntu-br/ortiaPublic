import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstruturaDoOrcamentoRoutingModule } from './estrutura-do-orcamento-routing.module';
import { EstruturaDoOrcamentoFormComponent } from './estrutura-do-orcamento-form/estrutura-do-orcamento-form.component';
import { ListEstruturaDoOrcamentoComponent } from './list-estrutura-do-orcamento/list-estrutura-do-orcamento.component';


@NgModule({
  declarations: [
    EstruturaDoOrcamentoFormComponent,
    ListEstruturaDoOrcamentoComponent
  ],
  imports: [
    CommonModule,
    EstruturaDoOrcamentoRoutingModule
  ]
})
export class EstruturaDoOrcamentoModule { }
