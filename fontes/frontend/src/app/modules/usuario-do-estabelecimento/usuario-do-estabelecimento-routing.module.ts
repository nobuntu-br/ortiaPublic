import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioDoEstabelecimentoFormComponent } from './usuario-do-estabelecimento-form/usuario-do-estabelecimento-form.component'; 
import { ListUsuarioDoEstabelecimentoComponent } from './list-usuario-do-estabelecimento/list-usuario-do-estabelecimento.component'; 


const routes: Routes = [
  { path: '', component: ListUsuarioDoEstabelecimentoComponent}, 
  { path: 'new', component: UsuarioDoEstabelecimentoFormComponent}, 
  { path: ':id/edit', component: UsuarioDoEstabelecimentoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class UsuarioDoEstabelecimentoRoutingModule { }
