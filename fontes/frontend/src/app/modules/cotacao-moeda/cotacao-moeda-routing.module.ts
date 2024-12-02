import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotacaoMoedaFormComponent } from './cotacao-moeda-form/cotacao-moeda-form.component'; 
import { ListCotacaoMoedaComponent } from './list-cotacao-moeda/list-cotacao-moeda.component'; 


const routes: Routes = [
  { path: '', component: ListCotacaoMoedaComponent}, 
  { path: 'new', component: CotacaoMoedaFormComponent}, 
  { path: ':id/edit', component: CotacaoMoedaFormComponent} 

];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CotacaoMoedaRoutingModule { }
