import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaLivroRazaoRoutingModule } from './consulta-livro-razao-routing.module';
import { ConsultaLivroRazaoComponent } from './consulta-livro-razao/consulta-livro-razao.component';


@NgModule({
  declarations: [
    ConsultaLivroRazaoComponent
  ],
  imports: [
    CommonModule,
    ConsultaLivroRazaoRoutingModule
  ]
})
export class ConsultaLivroRazaoModule { }
