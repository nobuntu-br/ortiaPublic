import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component'; 
import { ListProjetoComponent } from './list-projeto/list-projeto.component'; 


const routes: Routes = [
  { path: '', component: ListProjetoComponent}, 
  { path: 'new', component: ProjetoFormComponent}, 
  { path: ':id/edit', component: ProjetoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ProjetoRoutingModule { }
