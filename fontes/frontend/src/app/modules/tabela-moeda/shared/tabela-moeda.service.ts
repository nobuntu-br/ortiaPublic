import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TabelaMoeda } from "app/modules/tabela-moeda/shared/tabela-moeda.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class TabelaMoedaService extends BaseResourceService<TabelaMoeda> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/tabela-moedas"; 

    super(url, injector, TabelaMoeda.fromJson) 
  } 
}
