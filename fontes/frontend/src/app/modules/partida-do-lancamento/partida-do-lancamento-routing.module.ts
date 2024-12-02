import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidaDoLancamentoFormComponent } from './partida-do-lancamento-form/partida-do-lancamento-form.component'; 
import { ListPartidaDoLancamentoComponent } from './list-partida-do-lancamento/list-partida-do-lancamento.component'; 


const routes: Routes = [
  { path: '', component: ListPartidaDoLancamentoComponent}, 
  { path: 'new', component: PartidaDoLancamentoFormComponent}, 
  { path: ':id/edit', component: PartidaDoLancamentoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PartidaDoLancamentoRoutingModule { }
