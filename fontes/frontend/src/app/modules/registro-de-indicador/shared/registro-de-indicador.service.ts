import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroDeIndicador } from "app/modules/registro-de-indicador/shared/registro-de-indicador.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class RegistroDeIndicadorService extends BaseResourceService<RegistroDeIndicador> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/registros-de-indicadores"; 

    super(url, injector, RegistroDeIndicador.fromJson) 
  } 
}
