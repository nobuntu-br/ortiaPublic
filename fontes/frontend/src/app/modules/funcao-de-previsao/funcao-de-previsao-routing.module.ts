import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncaoDePrevisaoFormComponent } from './funcao-de-previsao-form/funcao-de-previsao-form.component'; 
import { ListFuncaoDePrevisaoComponent } from './list-funcao-de-previsao/list-funcao-de-previsao.component'; 


const routes: Routes = [
  { path: '', component: ListFuncaoDePrevisaoComponent}, 
  { path: 'new', component: FuncaoDePrevisaoFormComponent}, 
  { path: ':id/edit', component: FuncaoDePrevisaoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class FuncaoDePrevisaoRoutingModule { }
