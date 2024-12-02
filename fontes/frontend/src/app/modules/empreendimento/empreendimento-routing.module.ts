import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpreendimentoFormComponent } from './empreendimento-form/empreendimento-form.component'; 
import { ListEmpreendimentoComponent } from './list-empreendimento/list-empreendimento.component'; 


const routes: Routes = [
  { path: '', component: ListEmpreendimentoComponent}, 
  { path: 'new', component: EmpreendimentoFormComponent}, 
  { path: ':id/edit', component: EmpreendimentoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class EmpreendimentoRoutingModule { }
