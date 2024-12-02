import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaMoedaFormComponent } from './tabela-moeda-form/tabela-moeda-form.component'; 
import { ListTabelaMoedaComponent } from './list-tabela-moeda/list-tabela-moeda.component'; 


const routes: Routes = [
  { path: '', component: ListTabelaMoedaComponent}, 
  { path: 'new', component: TabelaMoedaFormComponent}, 
  { path: ':id/edit', component: TabelaMoedaFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class TabelaMoedaRoutingModule { }
