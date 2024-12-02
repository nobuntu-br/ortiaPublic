import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroDeIndicadorFormComponent } from './registro-de-indicador-form/registro-de-indicador-form.component'; 
import { ListRegistroDeIndicadorComponent } from './list-registro-de-indicador/list-registro-de-indicador.component'; 


const routes: Routes = [
  { path: '', component: ListRegistroDeIndicadorComponent}, 
  { path: 'new', component: RegistroDeIndicadorFormComponent}, 
  { path: ':id/edit', component: RegistroDeIndicadorFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RegistroDeIndicadorRoutingModule { }
