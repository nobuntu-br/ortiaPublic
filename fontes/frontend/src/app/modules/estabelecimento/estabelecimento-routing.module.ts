import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstabelecimentoFormComponent } from './estabelecimento-form/estabelecimento-form.component'; 
import { ListEstabelecimentoComponent } from './list-estabelecimento/list-estabelecimento.component'; 


const routes: Routes = [
  { path: '', component: ListEstabelecimentoComponent}, 
  { path: 'new', component: EstabelecimentoFormComponent}, 
  { path: ':id/edit', component: EstabelecimentoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class EstabelecimentoRoutingModule { }
