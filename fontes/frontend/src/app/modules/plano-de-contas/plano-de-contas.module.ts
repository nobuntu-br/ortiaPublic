import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanoDeContasRoutingModule } from './plano-de-contas-routing.module';
import { PlanoDeContasFormComponent } from './plano-de-contas-form/plano-de-contas-form.component';
import { ListPlanoDeContasComponent } from './list-plano-de-contas/list-plano-de-contas.component';


@NgModule({
  declarations: [
    PlanoDeContasFormComponent,
    ListPlanoDeContasComponent
  ],
  imports: [
    CommonModule,
    PlanoDeContasRoutingModule
  ]
})
export class PlanoDeContasModule { }
