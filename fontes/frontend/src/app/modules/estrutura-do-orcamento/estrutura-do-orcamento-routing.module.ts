import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstruturaDoOrcamentoFormComponent } from './estrutura-do-orcamento-form/estrutura-do-orcamento-form.component'; 
import { ListEstruturaDoOrcamentoComponent } from './list-estrutura-do-orcamento/list-estrutura-do-orcamento.component'; 


const routes: Routes = [
  { path: '', component: ListEstruturaDoOrcamentoComponent}, 
  { path: 'new', component: EstruturaDoOrcamentoFormComponent}, 
  { path: ':id/edit', component: EstruturaDoOrcamentoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class EstruturaDoOrcamentoRoutingModule { }
