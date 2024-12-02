import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotacaoMoedaRoutingModule } from './cotacao-moeda-routing.module';
import { CotacaoMoedaFormComponent } from './cotacao-moeda-form/cotacao-moeda-form.component';
import { ListCotacaoMoedaComponent } from './list-cotacao-moeda/list-cotacao-moeda.component';


@NgModule({
  declarations: [
    CotacaoMoedaFormComponent,
    ListCotacaoMoedaComponent
  ],
  imports: [
    CommonModule,
    CotacaoMoedaRoutingModule
  ]
})
export class CotacaoMoedaModule { }
