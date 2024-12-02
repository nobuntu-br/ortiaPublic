import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentroDeCustoFormComponent } from './centro-de-custo-form/centro-de-custo-form.component'; 
import { ListCentroDeCustoComponent } from './list-centro-de-custo/list-centro-de-custo.component'; 


const routes: Routes = [
  { path: '', component: ListCentroDeCustoComponent}, 
  { path: 'new', component: CentroDeCustoFormComponent}, 
  { path: ':id/edit', component: CentroDeCustoFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CentroDeCustoRoutingModule { }
