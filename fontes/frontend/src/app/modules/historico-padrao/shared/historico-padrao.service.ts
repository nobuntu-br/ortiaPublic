import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistoricoPadrao } from "app/modules/historico-padrao/shared/historico-padrao.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class HistoricoPadraoService extends BaseResourceService<HistoricoPadrao> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/historicos-padrao"; 

    super(url, injector, HistoricoPadrao.fromJson) 
  } 
}
