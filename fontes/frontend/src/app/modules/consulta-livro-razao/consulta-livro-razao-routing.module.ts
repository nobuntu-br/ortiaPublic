import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaLivroRazaoFormComponent } from './consulta-livro-razao-form/consulta-livro-razao-form.component'; 
import { ListConsultaLivroRazaoComponent } from './list-consulta-livro-razao/list-consulta-livro-razao.component'; 


const routes: Routes = [
  { path: '', component: ListConsultaLivroRazaoComponent}, 
  { path: 'new', component: ConsultaLivroRazaoFormComponent}, 
  { path: ':id/edit', component: ConsultaLivroRazaoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ConsultaLivroRazaoRoutingModule { }
