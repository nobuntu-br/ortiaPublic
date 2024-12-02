import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaLivroRazaoComponent } from './consulta-livro-razao/consulta-livro-razao.component';

const routes: Routes = [
  { path: '', component: ConsultaLivroRazaoComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaLivroRazaoRoutingModule { }
