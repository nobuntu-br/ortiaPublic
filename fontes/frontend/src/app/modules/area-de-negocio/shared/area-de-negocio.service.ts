import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AreaDeNegocio } from "app/modules/area-de-negocio/shared/area-de-negocio.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AreaDeNegocioService extends BaseResourceService<AreaDeNegocio> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/areas-de-negocio"; 

    super(url, injector, AreaDeNegocio.fromJson) 
  } 
}
