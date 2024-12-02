import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ListProjetoComponent } from './list-projeto/list-projeto.component';


@NgModule({
  declarations: [
    ProjetoFormComponent,
    ListProjetoComponent
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule
  ]
})
export class ProjetoModule { }
