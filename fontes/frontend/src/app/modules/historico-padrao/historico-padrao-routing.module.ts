import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoPadraoFormComponent } from './historico-padrao-form/historico-padrao-form.component'; 
import { ListHistoricoPadraoComponent } from './list-historico-padrao/list-historico-padrao.component'; 


const routes: Routes = [
  { path: '', component: ListHistoricoPadraoComponent}, 
  { path: 'new', component: HistoricoPadraoFormComponent}, 
  { path: ':id/edit', component: HistoricoPadraoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HistoricoPadraoRoutingModule { }
