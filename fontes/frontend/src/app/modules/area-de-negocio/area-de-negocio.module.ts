import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaDeNegocioRoutingModule } from './area-de-negocio-routing.module';
import { AreaDeNegocioFormComponent } from './area-de-negocio-form/area-de-negocio-form.component';
import { ListAreaDeNegocioComponent } from './list-area-de-negocio/list-area-de-negocio.component';


@NgModule({
  declarations: [
    AreaDeNegocioFormComponent,
    ListAreaDeNegocioComponent
  ],
  imports: [
    CommonModule,
    AreaDeNegocioRoutingModule
  ]
})
export class AreaDeNegocioModule { }
