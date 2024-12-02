import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstabelecimentoRoutingModule } from './estabelecimento-routing.module';
import { EstabelecimentoFormComponent } from './estabelecimento-form/estabelecimento-form.component';
import { ListEstabelecimentoComponent } from './list-estabelecimento/list-estabelecimento.component';


@NgModule({
  declarations: [
    EstabelecimentoFormComponent,
    ListEstabelecimentoComponent
  ],
  imports: [
    CommonModule,
    EstabelecimentoRoutingModule
  ]
})
export class EstabelecimentoModule { }
