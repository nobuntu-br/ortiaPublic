import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaDeNegocioFormComponent } from './area-de-negocio-form/area-de-negocio-form.component'; 
import { ListAreaDeNegocioComponent } from './list-area-de-negocio/list-area-de-negocio.component'; 


const routes: Routes = [
  { path: '', component: ListAreaDeNegocioComponent}, 
  { path: 'new', component: AreaDeNegocioFormComponent}, 
  { path: ':id/edit', component: AreaDeNegocioFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AreaDeNegocioRoutingModule { }
