import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadorFormComponent } from './indicador-form/indicador-form.component'; 
import { ListIndicadorComponent } from './list-indicador/list-indicador.component'; 


const routes: Routes = [
  { path: '', component: ListIndicadorComponent}, 
  { path: 'new', component: IndicadorFormComponent}, 
  { path: ':id/edit', component: IndicadorFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class IndicadorRoutingModule { }
