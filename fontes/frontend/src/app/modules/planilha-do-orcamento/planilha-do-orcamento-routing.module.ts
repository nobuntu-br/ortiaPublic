import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanilhaDoOrcamentoFormComponent } from './planilha-do-orcamento-form/planilha-do-orcamento-form.component'; 
import { ListPlanilhaDoOrcamentoComponent } from './list-planilha-do-orcamento/list-planilha-do-orcamento.component'; 


const routes: Routes = [
  { path: '', component: ListPlanilhaDoOrcamentoComponent}, 
  { path: 'new', component: PlanilhaDoOrcamentoFormComponent}, 
  { path: ':id/edit', component: PlanilhaDoOrcamentoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PlanilhaDoOrcamentoRoutingModule { }
