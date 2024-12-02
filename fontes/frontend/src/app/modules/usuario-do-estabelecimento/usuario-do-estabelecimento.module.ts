import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioDoEstabelecimentoRoutingModule } from './usuario-do-estabelecimento-routing.module';
import { UsuarioDoEstabelecimentoFormComponent } from './usuario-do-estabelecimento-form/usuario-do-estabelecimento-form.component';
import { ListUsuarioDoEstabelecimentoComponent } from './list-usuario-do-estabelecimento/list-usuario-do-estabelecimento.component';


@NgModule({
  declarations: [
    UsuarioDoEstabelecimentoFormComponent,
    ListUsuarioDoEstabelecimentoComponent
  ],
  imports: [
    CommonModule,
    UsuarioDoEstabelecimentoRoutingModule
  ]
})
export class UsuarioDoEstabelecimentoModule { }
