import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanoDeContasFormComponent } from './plano-de-contas-form/plano-de-contas-form.component'; 
import { ListPlanoDeContasComponent } from './list-plano-de-contas/list-plano-de-contas.component'; 


const routes: Routes = [
  { path: '', component: ListPlanoDeContasComponent}, 
  { path: 'new', component: PlanoDeContasFormComponent}, 
  { path: ':id/edit', component: PlanoDeContasFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PlanoDeContasRoutingModule { }
