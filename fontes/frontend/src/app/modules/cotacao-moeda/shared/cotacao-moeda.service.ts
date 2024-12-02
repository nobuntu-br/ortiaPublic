import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CotacaoMoeda } from "app/modules/cotacao-moeda/shared/cotacao-moeda.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CotacaoMoedaService extends BaseResourceService<CotacaoMoeda> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/cotacao-moeda"; 

    super(url, injector, CotacaoMoeda.fromJson) 
  } 
}
