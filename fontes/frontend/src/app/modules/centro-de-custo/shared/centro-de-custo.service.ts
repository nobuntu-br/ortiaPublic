import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CentroDeCusto } from "app/modules/centro-de-custo/shared/centro-de-custo.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CentroDeCustoService extends BaseResourceService<CentroDeCusto> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/centros-de-custos"; 

    super(url, injector, CentroDeCusto.fromJson) 
  } 
}
