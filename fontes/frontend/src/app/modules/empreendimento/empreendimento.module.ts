import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpreendimentoRoutingModule } from './empreendimento-routing.module';
import { EmpreendimentoFormComponent } from './empreendimento-form/empreendimento-form.component';
import { ListEmpreendimentoComponent } from './list-empreendimento/list-empreendimento.component';


@NgModule({
  declarations: [
    EmpreendimentoFormComponent,
    ListEmpreendimentoComponent
  ],
  imports: [
    CommonModule,
    EmpreendimentoRoutingModule
  ]
})
export class EmpreendimentoModule { }
