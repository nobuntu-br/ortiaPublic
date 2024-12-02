import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncaoDePrevisaoRoutingModule } from './funcao-de-previsao-routing.module';
import { FuncaoDePrevisaoFormComponent } from './funcao-de-previsao-form/funcao-de-previsao-form.component';
import { ListFuncaoDePrevisaoComponent } from './list-funcao-de-previsao/list-funcao-de-previsao.component';


@NgModule({
  declarations: [
    FuncaoDePrevisaoFormComponent,
    ListFuncaoDePrevisaoComponent
  ],
  imports: [
    CommonModule,
    FuncaoDePrevisaoRoutingModule
  ]
})
export class FuncaoDePrevisaoModule { }
