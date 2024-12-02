import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoContabilFormComponent } from './lancamento-contabil-form/lancamento-contabil-form.component'; 
import { ListLancamentoContabilComponent } from './list-lancamento-contabil/list-lancamento-contabil.component'; 


const routes: Routes = [
  { path: '', component: ListLancamentoContabilComponent}, 
  { path: 'new', component: LancamentoContabilFormComponent}, 
  { path: ':id/edit', component: LancamentoContabilFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class LancamentoContabilRoutingModule { }
