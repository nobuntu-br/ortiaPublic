import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaLivroRazaoRoutingModule } from './consulta-livro-razao-routing.module';
import { ConsultaLivroRazaoFormComponent } from './consulta-livro-razao-form/consulta-livro-razao-form.component';
import { ListConsultaLivroRazaoComponent } from './list-consulta-livro-razao/list-consulta-livro-razao.component';


@NgModule({
  declarations: [
    ConsultaLivroRazaoFormComponent,
    ListConsultaLivroRazaoComponent
  ],
  imports: [
    CommonModule,
    ConsultaLivroRazaoRoutingModule
  ]
})
export class ConsultaLivroRazaoModule { }
